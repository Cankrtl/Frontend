// function f1(){
//   console.log("f1");
// }

// function f2(){
//   console.log("f2");
// }

// function f3(){
//   console.log("f3");
// }

// f1()
// f2()
// f3()

function f1() {
  // Some code
  console.log("f1");
}

function f2() {
  f1();
  console.log("f2");
}

function f3() {
  f2();
  console.log("f3");
}



function main(){
  f3();
  console.log("main");
}


function asyncTest(){
  console.log("Hello");
   setTimeout(()=>{console.log("Ben gelecekten geliyorum")} , 10000);
  console.log("bye");
}


function asyncTest2(){
  console.log("Selams");
  setInterval(() => {
    console.log("Tick");
  }, 300);
  console.log("Byes");
}

asyncTest2();