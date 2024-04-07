

const Yala_Data = JSON.parse(localStorage.getItem("Yala"));

const yala_banner = document.getElementById("yala-banner");
yala_banner.innerText = Yala_Data.main.banner.text;

const yala_intro = Yala_Data.main.Introduction["double-boxes"].information;
document.getElementById("yala-intro").innerText = yala_intro["section-title"];
document.getElementById("yala-text").innerText = yala_intro.description;

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

const Gallery = Yala_Data.main.forest_galery.Gallery.images;
document.getElementById("yala-gallery").innerHTML = generateImages(Gallery);

const yala_discover = Yala_Data.main.discover["discover-list"];

document.getElementById("yala-discover").innerHTML =
  list_generator(yala_discover);


//only display the editor if there is someone logged in
if (localStorage.getItem("currentUser")) {
  const getEditor = `<img src="images/icons/editor.png" alt="editor" onclick="openEditor()">`;
  document.getElementById("editor").insertAdjacentHTML("beforeend", getEditor);
}
function openEditor() {
  window.open("editor.html", "", "width= 800px, height= 410px");
}
