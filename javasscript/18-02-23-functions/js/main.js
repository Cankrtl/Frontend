console.log("Hello :)");

/* function statements */
function myFirstFunc(){
    console.log("Hello function!");
}

myFirstFunc(); // invoking, calling a function



function sayHello(FirstName, lastName){
      console.log("Merhaba " + FirstName + " " + lastName )
}

sayHello("Can", "Kartal");

sayHello("Burak", "Kuyucaklı");



/* --- Default parameters --- */
function add(a, b){
    const result = a + b;
    console.log(result)
}
add(23, 532)

function greet(FirstName, lastName, greetingWord="Merhaba"){
    const result = greetingWord + ', ' + FirstName + " " +lastName;
    console.log(result)
}


greet("Burak", "Kuyucaklı", "selamlar")
greet("Doğukan", "yıldırım")

// --- Returning value from a function (bir fonksiyondan değer döndürmek)
// bir fonsiyon içerisinde return ile değer döndürmediğinzde js undefined değeri döndürür 
function test(){
    return "deneme";
}

console.log(test())

function multiply(a, b){
    const result = a * b;
    return result;
}

console.log(multiply(20, 3))

function divid(a, b){
    const result = a / b;
    return result;
}

console.log(divid(500, 5))

/*  */

function wrapWidhtTag(tagName, text){
    const result = "<" + tagName + ">" + text +"</" + tagName + ">";
    return result;
}

const myTestPEI = wrapWidhtTag("p", "Hello I am p tag");

const myH1E1 = wrapWidhtTag("h1", "weather is beautiful, today!")

console.log(myTestPEI, myH1E1);

// subtract(32, 48) -- subtract("a", 2)

function subtract(a, b){
    let result; 
    if(typeof a === "number" && typeof b ==="number"){
        result = a - b;
    }else{
        result = false;
    }
    return result;
}

console.log(subtract(18, 12))