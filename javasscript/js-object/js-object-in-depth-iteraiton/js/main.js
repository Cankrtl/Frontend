const user1 = {id:0, alias:"Pink", age:30};

for(let key in user1){
  console.log(`${key} : ${user1[key]}`);
}

// return the keys of an object as on array
const user1Keys = Object.keys(user1);

for(let i = 0; i<user1Keys.length; i++){
  console.log(user1Keys[i]);
}

user1Values = Object.values(user1);
console.log(user1Values);

// 
const user1Entries = Object.entries(user1);
console.log(user1Entries);

