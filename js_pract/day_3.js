// Expression & Operatoors 

// Conditional Opperaators

// let age =20;
// let m = (age > 7) ? "True" : "False";
// console.log(m);

// let num = 47;
// let check = (num%2==0) ? "Even" : "Odd";
// console.log(check);

//Comma Operators
// let x = (1 + 2, 3 * 4, 5 - 2); // only reeturns last expression
// console.log(x);

// //unary operator
// let a = -5;
// console.log(-a);

// x = 10;
// console.log(x++);
// console.log(++x);

// console.log(!true);
// console.log(!0);    
// console.log(!!"hi");

//Assignnment operators

// let a = 5;
// let b = 3;
// let result = a ^ b; // ^ XOR Operator
// console.log(result);

// //logical AND x && y
// //If x is falsy → returns x
// //If x is truthy → returns y

// console.log(true && "Hello");
// console.log(false && "Hello");
// console.log(0 && 42);          
// console.log("Hi" && 100); 

//x ?? y
//if x is  not defined or not null then returns x else return y

//|| - Logical  OR --  x || y -- Returns the first truthy value, or the last one if none are truthy

// let firstName = "John";
// let lastName = "Doe";
// let fullName = firstName + " " + lastName;
// console.log(fullName); // "John Doe"

// let age = 25;
// let message = "Age: " + age;
// console.log(message);

// let str = "Hello";
// str += " World!";
// console.log(str); 

// let name = "Alice";
// let greeting = `Hello, ${name}!`;
// console.log(greeting); 

// console.log("apple" < "banana"); 
// console.log("hello" === "Hello"); 

// console.log(a >> 1);


// //functions
// function greet(name) {
//     return `hello, ${name}!`;
// }
// console.log(greet("Alice"));


// const add = function(a,b) {
//     return a + b;
// };

//console.log(add(3, 4));

//classes
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`hi, I am ${this.name} and I'm ${this.age} years old.`);

//     }
// }

// const user = new Person("Alice", 25);
// user.greet();



//class inheritance 
// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }
  
//   class Dog extends Animal {
//     speak() {
//       console.log(`${this.name} barks.`);
//     }
//   }
  
//   const dog = new Dog("Rex");
//   dog.speak(); // "Rex barks."
  

// class Car {
//     constructor(brand, year) {
//         this.brand = brand
//         this.year = year
//     }

//     drive() {
//         console.log(`Driving ${this.brand} from ${this.year}`)
//     }
// }
// const myCar = new Car("Toyota", 2021);
// myCar.drive();

// rest parameters
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1,2,3));
// console.log(sum(5, 10, 15, 20));

// const add = (a, b) => a + b;

// console.log(add(2, 3));

// const  greet = function(name) {
//     return `Hello, ${name}`;
// };


//Arrow  funnction
// const greet = (name) => `Hello, ${name}`;

// const double = (x) => x*2;
// console.log(double(5))

// const add = (a, b) => a+b;
// console.log(add(5,4));

// const sayHello = () => `Hello World!`;
// console.log(sayHello())

// const reverseString = (str) => str.split("").reverse().join("");
// console.log(reverseString("ok ok, I know"));

// const getSquares = (arr) => arr.map(num => num * num);
// console.log(getSquares([1,3,4,5,6]));


// let name = promp("What is your name?");
// alert("Hello, "+ name + "!");
// console.log(name)

// let isSure = confirm("Are you sure you want to delete?");
// console.log(isSure);


// let name1 = "JavaScript";

// name1.length              // 10
// name1.toUpperCase()       // "JAVASCRIPT"
// name1.toLowerCase()       // "javascript"
// name1.includes("Script")  // true
// name1.indexOf("a")        // 1
// name1.slice(4, 10)        // "Script"


// let num = 3.14159;

// num.toFixed(2);        // "3.14"
// Number.isInteger(4);   // true
// Number.parseFloat("3.14") // 3.14
// Number.isNaN("hello")  // false


// Math.round(4.6);       // 5
// Math.floor(4.9);       // 4
// Math.ceil(4.1);        // 5
// Math.random();         // Random number between 0 and 1
// Math.max(5, 9, 1);     // 9
// Math.min(5, 9, 1);     // 1
// Math.pow(2, 3);        // 8


// let arr = [1, 2, 3];

// arr.push(4);           // [1, 2, 3, 4]
// arr.pop();             // removes 4
// arr.includes(2);       // true
// arr.join("-");         // "1-2-3"
// arr.slice(0, 2);       // [1, 2]
// arr.splice(1, 1);      // removes 1 item at index 1


// let now = new Date();

// now.getFullYear();     // e.g., 2025
// now.getMonth();        // 0-11
// now.getDate();         // 1-31
// now.getDay();          // 0-6 (Sun-Sat)
// now.toLocaleDateString(); // nicely formatted date

