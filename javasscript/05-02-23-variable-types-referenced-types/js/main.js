//primitive types

let team ="fenerbahçe"; //string types
let foundedAt = 1907; //nurmber types
let hasPat = true; //boolean types
let hasCar = false; //boolean types

let age = 11;

let myFriend1Age =30

let myFriend2Age = myFriend1Age;

myFriend1Age = 34;

console.log(myFriend2Age)

console.log( typeof team, typeof hasPat, typeof foundedAt);

team[0]= 'g'
console.log(team[0])

//mutability

// referenced types

let Seasons = ['winter', 'fall', 'spring', 'summer']//array
Seasons[1]='my fall'

console.log(Seasons)


let array1 = [1, 2, 3, 4, 5]

let array2 = array1

array1[0]='x';
console.log(array2)
