let myCar = {
    color : "red",
    weight: "1000kg",
    brand:"bmw",
    hasSunroof:true,
}

//accessing object key's value (dot notation)
console.log(myCar.color)
console.log(myCar.brand)


// accessing object key's value (square bracket notation)
console.log(myCar[color]);

console.log(myCar[brand]);


let MyHous ={
    color: "black",
    location:"kadiköy",
    hasBalcony:true,
    roomCount:3,
    tatalArea:"100metersquare",
    sections:["kitchen", "bedroom", "bathroom", "living room", "diningroom"],
}

let user = {
    firstName: "Deneme",
    lastName: "Test",
    hasRegistered:false,
    gender:"male",
    age:34,
    loginInfo:{password:"1234", id:123455123},
    subscriptionType:"monthly",
}

console.log(user.loginInfo["password"]);


let superHero ={
    alias:"spider man",
    skillSet:["net shooter", "climbing walls"],
    sayAlias:function(){
        console.log("I am the spider man")
    
    }
}



superHero.sayAlias();


let motorbike = {
    //objectt property
    brand: "harley Davidson",
    //objectt property
    maxSpeed:"250km/h",
    //object method
    break:function(){
        console.log("Break")
    },
     //object method
    accelerate:function(){
        console.log("accelerate")
    },
}

console.log(motorbike.brand);

motorbike.break();

