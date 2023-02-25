// (DRY) DONT REPEAT YOUR SELF

/*
const btnE1 = document .querySelector("button:first-child");


console.log(btnE1);

const btnE2 = document .querySelector("button:nth-child(2)");

console.log(btnE2);

const btnE3 = document .querySelector("button:nth-child(3)");

console.log(btnE3);

btnE1.addEventListener("click", handleBtn1Click );

function handleBtn1Click(e){
   const target = e.target;
   const index = target .dataset.index;
   const color = target.dataset.color;
   const age = target.dataset.age;
   alert("Ben " + index)

}

btnE2.addEventListener("click", handleBtn2Click );

function handleBtn2Click(e){
    const target = e.target;
    const index = target.dataset.index;
    alert("Ben " + index)
}


btnE3.addEventListener("click", handleBtn3Click );

function handleBtn3Click(e){
    const target = e.target;
    const index = target.dataset.index;
    alert("Ben " + index)
}
*/

/* Event delegation */

const navEI = document.querySelector("nav");

navEI.addEventListener("click", handleBtnClick);

function handleBtnClick(e){
    const target = e.target;
    const index = target.dataset.index;
    const currentlyActiveBtn = document.querySelector("nav button.active");

    console.log(currentlyActiveBtn)
    
    if(currentlyActiveBtn){
        currentlyActiveBtn.classList.remove("active");
    }


    target.classList.add("active")
}

