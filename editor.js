const get_data_button = document.getElementById("select_page");
if (get_data_button)
  get_data_button.addEventListener("click", function () {
    // e.preventDefault();
    const selected_page = document.querySelector(".select_page").value;
    let textarea = document.querySelector(".json_textarea");
    // textarea.value = "";

    if (selected_page == "home") {
      textarea.value = localStorage.getItem("Home_page");
    }
    if (selected_page == "introduction") {
      textarea.value = localStorage.getItem("Introduction");
    }

    if (selected_page == "department") {
      textarea.value = localStorage.getItem("Department");
    }

    if (selected_page == "leopards") {
      textarea.value = localStorage.getItem("Leopards");
    }

    if (selected_page == "animals") {
      textarea.value = localStorage.getItem("Animal_data");
    }

    if (selected_page == "wilpattu") {
      textarea.value = localStorage.getItem("Willpattu");
    }

    if (selected_page == "yala") {
      textarea.value = localStorage.getItem("Yala");
    } else {
      console.log("something went wrong");
    }
  });

const editPageButton = document.getElementById("edit_page");

if (editPageButton) {
  editPageButton.addEventListener("click", function () {

    const selected_page = document.querySelector(".select_page").value;
    const textareaValue = document.querySelector(".json_textarea").value;

    if (selected_page && textareaValue) {
      if (selected_page == "home") {
        localStorage.setItem("Home_page", textareaValue);
      }

      if (selected_page == "introduction") {
        localStorage.setItem("Introduction", textareaValue);
      }

      if (selected_page == "department") {
        localStorage.setItem("Department", textareaValue);
      }

      if (selected_page == "leopards") {
        localStorage.setItem("Leopards", textareaValue);
      }

      if (selected_page == "animals") {
        localStorage.setItem("Animal_data", textareaValue);
      }

      if (selected_page == "wilpattu") {
        localStorage.setItem("Willpattu", textareaValue);
      }

      if (selected_page == "yala") {
        localStorage.setItem("Yala", textareaValue);
      }

      // localStorage.setItem(selected_page, textareaValue);
      alert("Data saved to local storage! Refresh the page to see the changes.");
    } else {
      console.log(
        "Error: Something went wrong. Make sure both page and textarea have values."
      );
    }
  });
}
