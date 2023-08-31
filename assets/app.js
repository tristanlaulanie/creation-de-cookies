console.log("Hello from app.js");

// SELECTION DU FORMULAIRE
const form = document.querySelector("#form");

// SELECTION DES CHAMPS DU FORMULAIRE
const nameField = document.querySelector("#name");
// console.log(nameField);
const valueField = document.querySelector("#value");

// STOCKAGE DES VALEURS DES CHAMPS DU FORMULAIRE
const nameEntry = nameField.value;
const valueEntry = valueField.value;

// SELECTION DES BOUTONS
const submitButton = document.querySelector("#submit-button");
const displayButton = document.querySelector("#display-button");

const infoText = document.querySelector("#info-text");
const cookiesList = document.querySelector("#cookies-list");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  // STOCKAGE DES VALEURS DES CHAMPS DU FORMULAIRE APRES LE CLICK
  const nameEntry = nameField.value;
  const valueEntry = valueField.value;

  // STOCKAGE DES VALEURS DANS LE LOCALSTORAGE
  localStorage.setItem("name", nameEntry);
  localStorage.setItem("value", valueEntry);
  console.log("Les données ont été stockées dans le localStorage!");

  // RECUPERAION DES VALEURS DU LOCALSTORAGE
  const storedName = localStorage.getItem("name");
  const storedValue = localStorage.getItem("value");

  if (storedName && storedValue) {
    console.log(`Nom: ${storedName}, Valeur: ${storedValue}`);
    infoText.innerHTML = "Le cookie a été créé avec succès!";
  } else {
    console.log("Aucune donnée trouvée dans le localStorage!");
  }
});

displayButton.addEventListener("click", (event) => {
  event.preventDefault();

  // RECUPERAION DES VALEURS DU LOCALSTORAGE
  const storedName = localStorage.getItem("name");
  const storedValue = localStorage.getItem("value");

  if (storedName && storedValue) {
    console.log(`Nom: ${storedName}, Valeur: ${storedValue}`);
    infoText.innerHTML = "Affichage des cookies : OK 👌";
  } else {
    console.log("Aucune donnée trouvée dans le localStorage!");
  }

  function addElementsToList() {
    const ul = document.getElementById("cookies-list");

    // Création d'un nouvel élément <li>
    const li = document.createElement("li");

    // Création d'un élément <p>
    const p = document.createElement("p");
    p.textContent = `Nom du cookie: ${storedName}`;

    // Création d'un élément <span>
    const span = document.createElement("span");
    span.textContent = `Valeur du cookie: ${storedValue}`;

    // Création d'un élément <button>
    const cookieButton = document.createElement("button");

    // Ajout des éléments <p>, <span>, et <button> à l'élément <li>
    li.appendChild(p);
    li.appendChild(span);
    li.appendChild(cookieButton);
    cookieButton.classList.add("delete-button");
    cookieButton.textContent = "X";

    // Ajout de l'élément <li> à l'élément <ul>
    ul.appendChild(li);
  }

  addElementsToList();

  // SUPPRESSION DES COOKIES
  const deleteButtons = document.querySelectorAll(".delete-button");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      console.log("Cliques");
      event.preventDefault();

      localStorage.removeItem("name");
      localStorage.removeItem("value");
      infoText.innerHTML = "Le cookie a été supprimé avec succès!";
      button.parentNode.remove();
    });
  });
});
