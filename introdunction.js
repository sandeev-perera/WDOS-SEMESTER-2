const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-mobile");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});


const Introduction_Data = JSON.parse(localStorage.getItem("Introduction"));

const paragraphElement = document.getElementById("bannerText");
paragraphElement.textContent = Introduction_Data.main.banner.text;
document.getElementById("wild-life").textContent =
  Introduction_Data.main["wild-life-locations"]["section-title"];

function create_location(index, name) {
  //function to create the wildlife location. DO NOT TOUCH!!
  const location =
    Introduction_Data.main["wild-life-locations"].locations[index];
  document.getElementById(`${name}`).textContent = location.name;
  document.getElementById(`${name}-text`).textContent = location.description[0];
  document.getElementById(`${name}-text-2`).textContent =
    location.description[1];
  document.getElementById(
    `${name}-images`
  ).innerHTML = `<img class="gallery-item location-photo" src="${location.images[0].src}" loading="lazy" alt="${location.images[0].alt}">
    <img class="gallery-item location-photo" src="${location.images[1].src}" loading="lazy" alt="${location.images[1].alt}">
    <img class="gallery-item location-photo" src="${location.images[2].src}" loading="lazy" alt="${location.images[2].alt}">`;
  document.getElementById(
    `${name}-map`
  ).innerHTML = `<iframe class="location-map"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    src="${location.map}"
    ></iframe>`;
}

function table_generator(json_path) {
  //function to create the body of the table
  let code = ``;
  for (let i = 0; i < json_path.length; i++) {
    code += `<tr>
    <td>${json_path[i].name}</td>
    <td>
      <img src="${json_path[i].image}" alt="${json_path[i].alt}" loading="lazy" />
    </td>
    <td>${json_path[i].facts}</td>
  </tr>`;
  }
  return code;
}

create_location(0, "sinharaja");
create_location(1, "udawalawa");
create_location(2, "kadulla");
create_location(3, "bundala");

//To create the body of the table
const table_location = Introduction_Data.main.table.animals;
document.getElementById("table-body").innerHTML =
  table_generator(table_location);

//only display the editor if there is someone logged in
if (localStorage.getItem("currentUser")) {
  const getEditor = `<img src="images/icons/editor.png" alt="editor" onclick="openEditor()">`;
  document.getElementById("editor").insertAdjacentHTML("beforeend", getEditor);
}

function openEditor() {
  window.open("editor.html", "", "width= 800px, height= 410px");
}

//These are the hardcoded part

// const sinharaja = Introduction_Data.main["wild-life-locations"].locations[0];
// document.getElementById("sinharaja").textContent = sinharaja.name;
// document.getElementById("sinharaja-text").textContent = sinharaja.description[0];
// document.getElementById("sinharaja-text_2").textContent = sinharaja.description[1];

// document.getElementById("sinharaja_images").innerHTML = `<img class="gallery-item location-photo" src="${sinharaja.images[0].src}">
// <img class="gallery-item location-photo" src="${sinharaja.images[1].src}">
// <img class="gallery-item location-photo" src="${sinharaja.images[2].src}">`;

// const udawalawa = Introduction_Data.main["wild-life-locations"].locations[1];
// document.getElementById("udawalawa").textContent = udawalawa.name;
// document.getElementById("udawalawa-text").textContent = udawalawa.description[0];
// document.getElementById("udawalawa-text-2").textContent = udawalawa.description[1];
// document.getElementById("udawalawa_images").innerHTML = `<img class="gallery-item location-photo" src="${udawalawa.images[0].src}">
// <img class="gallery-item location-photo" src="${udawalawa.images[1].src}">
// <img class="gallery-item location-photo" src="${udawalawa.images[2].src}">`;

// const kaudulla = Introduction_Data.main["wild-life-locations"].locations[2];
// document.getElementById("kadulla").textContent = kaudulla.name;
// document.getElementById("kaudulla-text").textContent = kaudulla.description[0];
// document.getElementById("kaudulla-text-2").textContent = kaudulla.description[1];
// document.getElementById("kaudulla_images").innerHTML = `<img class="gallery-item location-photo" src="${kaudulla.images[0].src}">
// <img class="gallery-item location-photo" src="${kaudulla.images[1].src}">
// <img class="gallery-item location-photo" src="${kaudulla.images[2].src}">`;

// function create_location(index) {
//     const location = Introduction_Data.main["wild-life-locations"].locations[index];
//     document.getElementById(location.name.toLowerCase()).textContent = location.name;
//     document.getElementById(`${location.name.toLowerCase()}-text`).textContent = location.description[0];
//     document.getElementById(`${location.name.toLowerCase()}-text-2`).textContent = location.description[1];
//     const imagesHTML = location.images.map(image => `<img class="gallery-item location-photo" src="${image.src}" loading="lazy">`).join("");
//     document.getElementById(`${location.name.toLowerCase()}-images`).innerHTML = imagesHTML;
// }
