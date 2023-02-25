alert("deneme")

const btnHamburgerEl = document.querySelector(".btn-hamburger");
const wrapperHamburger = document.querySelector(".wrapper-hamburger-nav");

btnHamburgerEl.addEventListener("click", handleNavhamburgerToggle);

function handleNavhamburgerToggle(){
   wrapperHamburger.classList.toggle("on");   
}