

const Willpattu_Data = JSON.parse(localStorage.getItem("Willpattu"));

const Willpattu_banner = document.getElementById("willpattu-banner");
Willpattu_banner.innerText = Willpattu_Data.main.banner.text;

const Intro = Willpattu_Data.main.Introduction["double-boxes"].information;
document.getElementById("willpattu-intro").innerText = Intro["section-title"];
document.getElementById("willpattu-text").innerHTML = Intro.description;

function generateImages(imagesArray) {
  let gallery_code = "";
  let array_length = imagesArray.length;
  for (let i = 0; i < array_length; i++) {
    gallery_code += `<div class="box${i + 1}">
        <img
          src="${imagesArray[i].src}"
          alt="${imagesArray[i].alt}"
          loading="${imagesArray[i].loading}"
        />
      </div>`;
  }
  return gallery_code;
}

function list_generator(array) {
  let code = ``;
  let array_size = array.length;
  for (let i = 0; i < array_size; i++) {
    code += `<li>${array[i]}</li>`;
  }
  return code;
}

const Gallery = Willpattu_Data.main.forest_galery.Gallery.images;

document.getElementById("willpattu-gallery").innerHTML =
  generateImages(Gallery);

const willpattu_discover = Willpattu_Data.main.discover["discover-list"];
document.getElementById("willpattu-discover").innerHTML =
  list_generator(willpattu_discover);


//only display the editor if there is someone logged in
if (localStorage.getItem("currentUser")) {
  const getEditor = `<img src="images/icons/editor.png" alt="editor" onclick="openEditor()">`;
  document.getElementById("editor").insertAdjacentHTML("beforeend", getEditor);
}
function openEditor() {
  window.open("editor.html", "", "width= 800px, height= 410px");
}
