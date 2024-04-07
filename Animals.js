
const Animals_Data = JSON.parse(localStorage.getItem("Animal_data"));

const animal_banner = document.getElementById("animals-topic");
animal_banner.innerText = Animals_Data.main.banner.text;

function displayAnimal(index) {
  const animal = Animals_Data.main.animals.animals[index];
  document.getElementById(`animal-${index + 1}`).innerText = animal.name;
  document.getElementById(`animal-${index + 1}-text`).innerText =
    animal.description;
  document.getElementById(
    `animal-${index + 1}-image`
  ).innerHTML = `<img src="${animal.image.src}" alt="${animal.image.alt}" />`;
}

for (let i = 0; i < Animals_Data.main.animals.animals.length; i++) {
  displayAnimal(i);
}

//only display the editor if there is someone logged in
if (localStorage.getItem("currentUser")) {
  const getEditor = `<img src="images/icons/editor.png" alt="editor" onclick="openEditor()">`;
  document.getElementById("editor").insertAdjacentHTML("beforeend", getEditor);
}
function openEditor() {
  window.open("editor.html", "", "width= 800px, height= 410px");
}
