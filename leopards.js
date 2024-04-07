

const Leopards_Data = JSON.parse(localStorage.getItem("Leopards"));

const leopard_banner = document.getElementById("leopards-banner");
leopard_banner.textContent = Leopards_Data.main.banner.text;

document.getElementById("discover_leopards").textContent =
  Leopards_Data.main["leopard-locations"]["section-title"];

function leopard_location_generator(index, name) {
  const location = Leopards_Data.main["leopard-locations"].locations[index];
  document.getElementById(`${name}-leopard`).textContent = location.name;
  document.getElementById(`${name}-text`).textContent = location.description;
  document.getElementById(
    `${name}-image`
  ).innerHTML = `<img src="${location.image.src}" alt="${location.image.alt}"/>`;
}

leopard_location_generator(0, "yala");
leopard_location_generator(1, "wilpattu");
leopard_location_generator(2, "udawalawa");

document.getElementById("threat-title").textContent =
  Leopards_Data.main["leopard-threats"]["section-title"];

function list_generator(array) {
  let code = ``;
  let array_size = array.length;
  for (let i = 0; i < array_size; i++) {
    code += `<li>${array[i]}</li>`;
  }
  return code;
}

//function to create threats
function threat_generator(index) {
  const threat = Leopards_Data.main["leopard-threats"].threats[index];
  document.getElementById(`threat-${index + 1}`).textContent = threat.title;
  document.getElementById(`threat-${index + 1}-text`).textContent =
    threat.description;
  document.getElementById(
    `threat-${index + 1}-image`
  ).innerHTML = `<img src="${threat.image.src}" alt="${threat.image.alt}"/>`;

  const consequence =
    Leopards_Data.main["leopard-threats"].threats[index].consequences;

  document.getElementById(`threat-${index + 1}-cons`).innerHTML =
    list_generator(consequence);
}

const leopard_threats = Leopards_Data.main["leopard-threats"].threats;

for (let i = 0; i < leopard_threats.length; i++) {
  threat_generator(i);
}


//only display the editor if there is someone logged in
if (localStorage.getItem("currentUser")) {
  const getEditor = `<img src="images/icons/editor.png" alt="editor" onclick="openEditor()">`;
  document.getElementById("editor").insertAdjacentHTML("beforeend", getEditor);
}
function openEditor() {
  window.open("editor.html", "", "width= 800px, height= 410px");
}




// threat_generator(0);
// threat_generator(1);

// const Yala = Leopards_Data.main["leopard-locations"].locations[0];

// document.getElementById("yala-leopard").textContent = Yala.name;
// document.getElementById("yala-text").textContent = Yala.description;
// document.getElementById(
//   "yala-image"
// ).innerHTML = `<img src="${Yala.image.src}" alt="${Yala.image.alt}"/>`;

// const willpattu = Leopards_Data.main["leopard-locations"].locations[1];

// document.getElementById("wilpattu-leopard").textContent = willpattu.name;
// document.getElementById("wilpattu-text").textContent = willpattu.description;
// document.getElementById(
//   "wilpattu-image"
// ).innerHTML = `<img src="${willpattu.image.src}" alt="${willpattu.image.alt}"/>`;

// const udawalawa = Leopards_Data.main["leopard-locations"].locations[2];

// document.getElementById("udawalawa-leopard").textContent = udawalawa.name;
// document.getElementById("udawalawa-text").textContent = udawalawa.description;
// document.getElementById(
//   "udawalawa-image"
// ).innerHTML = `<img src="${udawalawa.image.src}" alt="${udawalawa.image.alt}"/>`;

// const habitat_loss = Leopards_Data.main["leopard-threats"].threats[0];

// document.getElementById("threat-1").textContent = habitat_loss.title;
// document.getElementById("threat-1-text").textContent = habitat_loss.description;
// document.getElementById(
//   "threat-1-image"
// ).innerHTML = `<img src="${habitat_loss.image.src}" alt="${habitat_loss.image.alt}"/>`;

// const wildlife_trade = Leopards_Data.main["leopard-threats"].threats[1];

// document.getElementById("threat-2").textContent = wildlife_trade.title;
// document.getElementById("threat-2-text").textContent =
//   wildlife_trade.description;
// document.getElementById(
//   "threat-2-image"
// ).innerHTML = `<img src="${wildlife_trade.image.src}" alt="${wildlife_trade.image.alt}"/>`;

// const consequence_2 =
//   Leopards_Data.main["leopard-threats"].threats[1].consequences;

// document.getElementById("threat-2-cons").innerHTML =
//   list_generator(consequence_2);
