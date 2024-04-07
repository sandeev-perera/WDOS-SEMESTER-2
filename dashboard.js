const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-mobile");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

fetch("users.json")
  .then((response) => response.json())
  .then((data) => {
    if (!localStorage.getItem("Users")) {
      localStorage.setItem("Users", JSON.stringify(data));
    }
    console.log("successfull");
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const User_Data = JSON.parse(localStorage.getItem("Users"));


function list_generator(array) {
    let code = ``;
    let array_size = array.length;
    for (let i = 0; i < array_size; i++) {
      code += `<li>${array[i]}</li>`;
    }
    return code;
  }

// const emails = User_Data.newsleterEmails;



const currentUserString = localStorage.getItem('currentUser');
const currentUser = JSON.parse(currentUserString);




if (currentUser.role == "admin"){  
  const emails = JSON.parse(localStorage.getItem("subscribedEmails"))
  document.getElementById("newsletter_emails").innerHTML = list_generator(emails);
}
else{
  document.getElementById("user_message").innerText = "You need Admin privilege to view this data";
}



if (localStorage.getItem("currentUser")) {
  // const user = localStorage.getItem("currentUser");
  const getEditor = `<img src="images/icons/editor.png" alt="editor" onclick="openEditor()">`;
  document.getElementById("editor").insertAdjacentHTML("beforeend", getEditor);
  // console.log(user);
}

function openEditor() {
  window.open("editor.html", "", "width= 800px, height= 410px");
}