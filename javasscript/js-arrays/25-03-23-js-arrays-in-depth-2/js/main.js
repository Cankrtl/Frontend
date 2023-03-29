const DATA_BASKET = [    

 {title:"Faber kırmızı kalem",   Category:"kalem", price:75},
 
 {title:"Phone case",   Category:"case", price:175},

 {title:"Phone case",   Category:"case", price:175},

 {title:"Phone case",   Category:"case", price:175},

 {title:"Phone case",   Category:"case", price:175},


]


let basketTotal = 0;

const basketListEl = document.querySelector(".basket-list");

DATA_BASKET.forEach((item)=>{

// yeni li elemanı oluştur

const liEl = document.createElement("li");

// yeni li elemanın text içeriğini item objesini title özelliği olarak ata

liEl.textContent = item.title;


// yeni li elemanını basket listesine append et 

basketListEl.append(liEl)

basketTotal = basketTotal + item.price;


})

const msgEl = document.querySelector("p.msg");

msgEl.textContent = `Sayın kullanıcımız ${basketTotal} liralık ürün aldınız.`

/* --- Array filter method --- */

const fruits = ["Elma", "Muz", "Portakal", "portakal", "portakal", "kivi"];

// fruits.filter((item)=>{

// if (item === "Portakal"){

// return true;
// }else{
//   return false;
// }


// })

const filteredFruits = fruits.filter((item)=>item==="Portakal");

console.log(filteredFruits);


// *, -, /, +, %

const numberArr = [1, 4, 9, 12, 17]

const  oddNumbers = numberArr.filter((item)=>{
  
    if(item % 2 === 1){

      return true;
    }
   return false;

})

console.log(numberArr);


// const oddNumbers = numberArr.filter((item)=>item % 2 === 1)

const DATA_USERS = [
  {name:"Can",  surname:"Kartal", sex:"male"},

  {name:"Ayşenur",  surname:"güner", sex:"female"},

  {name:"Ali",  surname:"Kraken", sex:"male"},

  {name:"Şeyma",  surname:"Subaşı", sex:"female"},

  {name:"Oğulcan",  surname:"İnam", sex:"male"},
]

// [ "Bay Can", "Bay Ali", "Bayan Ayşenur", ""]


const maleUsers = DATA_USERS.filter(filterMaleUsers);

const maleUsersListEl = document.querySelector(".male-users-list");

function filterMaleUsers(user){
  if(user.sex === "Male"){
    return true;

  }
  return false;
}

maleUsers.forEach((maleUser)=>{

const liEl = document.createElement("li");

liEl.textContent = `Ad:${maleUser.name} \n Soyad:${maleUser.surname}`;

maleUsersListEl.append(liEl)

})


/* --- Arrays map method --- */

const numbers = [1, 3, 5, 7, 8, 15];
const doubles = numbers.map((number)=>{

  return number * 2;

});

console.log(doubles);


const  newGender = DATA_USERS.map((user)=>{


  if (user.sex === "male"){
 
    return `Bay ${user.name}`  }else{

      return `Bayan ${user.name}`
    }

})

const allUsersListEl = document.querySelector(".all-users");

newGender.forEach((title)=>{


  const liEl = document.createElement("li");

  liEl.textContent = title;


  allUsersListEl.append(liEl)

})

/* --- Arrays reduce method --- */


const  basket = [200, 300, 500, 600];

const basket2 = [
  {tittle:"iphone sx", price:7000},
  {tittle:"Faber kalem", price:25},
  {tittle:"Moleskin ajanda", price:400}

] 

const total = basket.reduce((acc, item)=>{

  console.log(acc, item);
  return acc + item;

}, 0);

const total2 = basket2.reduce((acc, item)=>{


  return acc + item.price

}, 0)

console.log(total2);


/* --- for ...of --- */

const seasons = ["winter", "summer", "fall", "spring"];

for(let season of seasons){

console.log(season);

}
