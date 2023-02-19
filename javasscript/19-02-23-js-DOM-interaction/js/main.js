const boxEI = document.querySelector(".box")

boxEI.addEventListener("click", handleClick);

function handleClick(){
    console.log("I am the box!!!");
}

const pEI = document.querySelector("p")

function handleColor(){
   let pEIBgColor = pEI.style.backgroundColor;
   if(pEIBgColor === "blue"){
    pEI.style.backgroundColor = "red"
   }else{
    pEI.style.backgroundColor = "blue"
   }
}

pEI.addEventListener("click",handleColor)