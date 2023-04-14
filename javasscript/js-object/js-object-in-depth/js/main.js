// keyed collection type
const user1 = {
  alias: "Darkness", //key value (property)
  hasPet: false, //key value (property)
  hasCar: false, //key value (property)
  age: 24, //key value (property)
  great: function () {
    console.log("hello" + this.alias);
  },
};
// accessing values


// dot notation
console.log(user1.age, user1.alias);

user1.great();//user1 objesinin greet methodu

user1.hasCar = true; //modify

user1.height = "190cm" // add new property

console.log(user1);


// squarwBracket notation
console.log(user1["age"], user1["hasCar"]);

const car = {brand:"Bmw", engine1:"200hp", engine2:"300hp"};
const num = 2;

console.log(car["engine" + num ]);

car["brand"] = "Tesla"; // modify
car["hasSunroof"] = false // add new property


// --- destructuring  access + assingn--- //

const hero = {alias:"Hulk", age:50, color:"green"};

const{alias, age, ...rest } = hero;

console.log(alias, age, rest);

const item = {category:"laptop", price:"24000tl"};

/* 
const myCategory = item.category;
const myLaptopPrice = item.price;
*/

const {categor:myCategory, price:myLaptopPrice} = item;

/* --- spread operator --- */

const book  = {author:"Jack London", name:"Beyaz diş", pagecount:300};

const book2 = {...book, coverIllustration:"Yiğit Özgür", pagecount:500};

console.log(book2);

const popSong = {singer:"Serdar Ortaç", songTitle:"Dansöz"};

const popSondCloned = {...popSong};

function test({name, id, age}){

    console.log(name, id, age);
}

const superUser  = {name:"Jack", id: 14, age:26};
test(superUser)