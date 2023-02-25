
const carouselNavEl = document.querySelector(".carousel nav");

const carouselSliderEl = document.querySelector(".carousel .slider")

carouselNavEl.addEventListener("click",
handleCarouselBtnClick);

function handleCarouselBtnClick(e){
    
    const targetBtn = e.target;
   const btnIndex = targetBtn.dataset.index;

    const moveX = Number (btnIndex) * -100;

     console.log(moveX);

   carouselSliderEl.style.marginLeft = moveX + "%";

}


const navEI = document.querySelector(".carousel nav")

navEI.addEventListener("click", handlebtnClick);

function handlebtnClick(e){
    const target = e.target;
    const index = target.dataset.index;
    
    console.log(index);
}