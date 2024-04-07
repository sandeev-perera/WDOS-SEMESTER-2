
const Department_page = JSON.parse(localStorage.getItem("Department"));

const department_banner = Department_page.main.banner.text;
document.getElementById("department_banner").textContent = department_banner;

const about_us = Department_page.main["about-us"];
document.getElementById("about-us-intro").textContent =
  about_us["section-title"];
document.getElementById("about-us-text").textContent = about_us.content[0].text;
document.getElementById("about-us-text-2").textContent =
  about_us.content[2].text;



//only display the editor if there is someone logged in
if (localStorage.getItem("currentUser")) {
  const getEditor = `<img src="images/icons/editor.png" alt="editor" onclick="openEditor()">`;
  document.getElementById("editor").insertAdjacentHTML("beforeend", getEditor);
}


function openEditor() {
  window.open("editor.html", "", "width= 800px, height= 410px");
}
