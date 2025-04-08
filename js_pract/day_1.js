// Simple print program 
// console.log("Hello World!")

// const myNumber = 3;
// myNumber =4;
// console.log(myNumber)
//"use strict";

// carName = "Volvo";
// var carName;
// console.log(carName)
// function show() {
//     console.log(this);
//   }
  
//   show();  // Non-strict: `window` (browser), Strict: `undefined`
  

// block scope
// let a = 10;

// function test() {
//   console.log(a);
// }

// test();
// console.log(a);     



//operations on different datatypes

//Number
let x = 10;
let y = 3;
console.log(x + y);

//String
let first = "Hello";
let last = "World";
console.log(first + ', ' + last);

// using template literals
console.log(`${first}, ${last}!`);  

console.log(first.length);

//Upper case lower case converion
console.log(first.toUpperCase());
console.log(first.toLowerCase());

// Boolean 
console.log(5 > 3);
console.log(5 < 3);

// non-premetive datatype

//object
let user = { name: "jono", age:30};
console.log(user)

delete user.age;
user.email = "xyz@gmail.com";
console.log(user)

let fruit =[2,4,"ed"]
//console.log(fruit)

console.log(fruit.slice(1));
// let m = fruit.slice(0,1)
// console.log(m)

fruit.push("grape");
fruit.pop();
fruit.unshift("mango");
console.log(fruit);


//function

function greett(name) {
  return `Hello, ${name}`;
}
let sayHi = greett;
console.log(sayHi("Aalice"));


