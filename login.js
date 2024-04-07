
//login button
document
  .getElementById("login")
  .addEventListener('click', function () {

    //get textbox values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    fetch("users.json")
      .then((response) => response.json())
      .then((data) => {
        let user = data.users.find(
          (user) => user.username === username && user.password === password
        );

        //retruns true if both username and pw is correct
        if (user) {
          alert("Welcome, " + username);
          localStorage.setItem("currentUser", JSON.stringify(user));
          
          window.location.href = "dashboard.html";
          alert(
            "The content editor is now available on the bottom right of your website"
          );

        } else {
          //if one condition is false
          alert("Invalid Username or Password");
          //remove textbox values
          document.getElementById("username").value = "";
          document.getElementById("password").value = "";
        }
      })
      .catch((error) => console.error("Error loading user data:", error));
  });


//logout button  
const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener('click', function(){
  if(localStorage.currentUser){

    //remove the key value pair of the current user
    localStorage.removeItem("currentUser");
    alert("Succesfully logged out")
    window.location.href = "index.html";
  }
  else{
    alert("You are already logged out !!")
  }
})

