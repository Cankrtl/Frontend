let season = "red";


if(season=="winter"){
    console.log("jumper")
}else if (season =="summer"){
    console.log("t-shirt")
}else if(season =="fall"){ 
    console.log("sweat shirt")
}else if(season =="spring"){
    console.log("hat");
}else{
    console.log("Invalid seaosn detected")
}


/* ==(coersion) vs ===(strict equality check)*/

console.log(1 == "1")


let team = "fb"

switch(team){
    case "fb":
        console.log("kanarya");
        break;
    case "gs":
        console.log("aslan");
        break;
    case "bjk":
        console.log("kartal");
        break;
    default:
        console.log("Team not found!")
}

/* ----- and(&&), or (||) ----*/

let FirstName = "can"
let password = "919788"

if(FirstName === "can" && password === "919788"){
    console.log("you are in!")
}else{
    console.log("Nop!")
}


let weatherCondition ="rainy";

if(weatherCondition === "rainy" || weatherCondition === "snowy"){
    console.log("take your umberella!")
}


/* --- not (!), notEqual (!==) --- */

let brand ="samsung"
if(brand !== "iphone"){
    console.log("Got to android store")
}


let isyoung = false;

console.log(isyoung, "---")

if(isyoung){
    console.log("Not retired")
}

if(!false){
    console.log("Retired")
}

let hasPet = true;

if(!hasPet){
    console.log("Hayvansever")
}
/* falsy values: 0, false, -0, null, undefined, NaN */

let myCarCount =null;
if (myCarCount){
    console.log("you are rich")
}

let mySuperName ="B";

if(mySuperName){
    console.log("you are super " + mySuperName)
}
    





