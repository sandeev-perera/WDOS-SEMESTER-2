

const Home_page = JSON.parse(localStorage.getItem("Home_page"));

const home_banner = document.getElementById("index-banner");
home_banner.innerText = Home_page.main["home-welcome-section"].text;

function create_Discover_Boxes(text_aray) {
  let array_size = text_aray.length;
  let code = ``;
  for (let i = 0; i < array_size; i++) {
    code += `<div class="box">
        <img src="${text_aray[i].image.src}" alt="${text_aray[i].image.alt}"/>
        <h2>${text_aray[i].title}</h2>
        <p>
          ${text_aray[i].text}
        </p>
      </div>`;
  }
  return code;
}

function list_generator(array) {
  let code = ``;
  let array_size = array.length;
  for (let i = 0; i < array_size; i++) {
    code += `<li>${array[i]}</li>`;
  }
  return code;
}

const featureBox = Home_page.main.features.boxes;
document.getElementById("feature-boxes").innerHTML =
  create_Discover_Boxes(featureBox);

//create the list for the second box

const welcome = Home_page.main["welcome-note"]["text-box"];
document.getElementById("welcome-title").innerText =
  welcome["section-title"].text;
document.getElementById("welcome-text").innerText = welcome["welcome-text"];

const introduction = Home_page.main.intro["double-boxes"].information;
document.getElementById("home-intro-text").innerText = introduction.text;

const location_list = introduction["ordered-list"];
document.getElementById("forest-location").innerHTML =
  list_generator(location_list);


//only display the editor if there is someone logged in
if (localStorage.getItem("currentUser")) {
  const getEditor = `<img src="images/icons/editor.png" alt="editor" onclick="openEditor()">`;
  document.getElementById("editor").insertAdjacentHTML("beforeend", getEditor);
}
function openEditor() {
  window.open("editor.html", "", "width= 800px, height= 410px");
}


const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-mobile");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});




// const news_btn = document.getElementById("submit")

// news_btn.addEventListener('click', function(){
//   const email = document.getElementById("email").value 
//   const users = JSON.parse(localStorage.getItem("Users"));
//   localStorage.setItem(email, users.newsleterEmails)
//   //  users.newsleterEmails.push(email)

// })



// const subscribeForm = document.getElementById("subscribeForm");

//     subscribeForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const get_email = document.getElementById('email').value;

//         let subscribedEmails = localStorage.getItem('subscribedEmails');
//         if (!subscribedEmails) {
//             subscribedEmails = [];
//         } else {
//             subscribedEmails = JSON.parse(subscribedEmails);
//         }

//         subscribedEmails.push(get_email);
//         localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));

//         alert("Thank you for subscribing to our newsletter!");

//         // Clear the input field after subscribing
//         document.getElementById('email').value = "";
//     });






// function 