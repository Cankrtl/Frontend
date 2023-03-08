

const btnToggleEl = document.querySelector(".btn-toggle");
const navMain = document.querySelector(".nav-main");

btnToggleEl.addEventListener("click", handleNavMainToggle);

function handleNavMainToggle(e){
   navMain.classList.toggle("expanded");   
}