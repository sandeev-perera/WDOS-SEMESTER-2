if (localStorage.length < 7) {
  console.log("this code runs");
  
  fetch("index.json")
  .then((response) => response.json())
  .then((data) => {
    if (!localStorage.getItem("Home_page")) {
      localStorage.setItem("Home_page", JSON.stringify(data));
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


  fetch("introduction.json")
    .then((response) => response.json())
    .then((data) => {
      if (!localStorage.getItem("Introduction")) {
        localStorage.setItem("Introduction", JSON.stringify(data));
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  fetch("Department.json")
    .then((response) => response.json())
    .then((data) => {
      if (!localStorage.getItem("Department")) {
        localStorage.setItem("Department", JSON.stringify(data));
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  fetch("leopards.json")
    .then((response) => response.json())
    .then((data) => {
      if (!localStorage.getItem("Leopards")) {
        localStorage.setItem("Leopards", JSON.stringify(data));
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  fetch("Animals.json")
    .then((response) => response.json())
    .then((data) => {
      if (!localStorage.getItem("Animal_data")) {
        localStorage.setItem("Animal_data", JSON.stringify(data));
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  fetch("Wilpattu.json")
    .then((response) => response.json())
    .then((data) => {
      if (!localStorage.getItem("Willpattu")) {
        localStorage.setItem("Willpattu", JSON.stringify(data));
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  fetch("Yala.json")
    .then((response) => response.json())
    .then((data) => {
      if (!localStorage.getItem("Yala")) {
        localStorage.setItem("Yala", JSON.stringify(data));
      }
      console.log("successfull");
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  fetch("users.json")
    .then((response) => response.json())
    .then((data) => {
      if (!localStorage.getItem("Users")) {
        localStorage.setItem("Users", JSON.stringify(data));
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

if (!localStorage.subscribedEmails) {
  const subscribedEmails = [
    "Max@gmail.com",
    "Ron@gmail.com",
    "Anne@yahoo.com",
    "Sam@gmail.com",
    "Tom@gmail.com",
    "Brian@yahoo.com",
  ];
  localStorage.setItem("subscribedEmails", JSON.stringify(subscribedEmails));
}
