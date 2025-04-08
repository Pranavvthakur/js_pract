// //Type Casting
// let m =  Number("123");
// console.log(typeof m);

// console.log("5" * "2");

// console.log(parseInt("123.45"));
// console.log(parseFloat("123.45"));

// console.log(45.34 + 34);

// //Number("abc");

// console.log(String(123));
// console.log(Boolean(34));


// //booleans behave in conditions or functions
// let isLoggedIn = true;


// if (isLoggedIn) {
//   console.log("Welcome back!");
// } else {
//   console.log("Please log in.");
// }


//Data  Structure

//array operations
// let arr =[10, 20, 30];
// console.log(arr[1]);
// console.log(arr);

// arr.unshift(5);
// console.log(arr);
// arr.splice(1,0,15); // adds in specific inndex
// console.log(arr);

//stack
// let stack =[]
// stack.push(1)
// stack.push(2)
// stack.pop()
// console.log(stack)

// // comparision operators

// console.log(5 == "5")//loose equality

// console.log(5 === "5")//strong equality
// console.log(6 > '5')


//Loops and Iterations


//For Loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (let i=1; i<=10; i++) {
//     console.log(`5 x ${i} = ${i*5}`);
// }


// let a=0
// for (let i=1; i<=100; i++) {
//     a = a+i
// }
// console.log(a)

//While loop
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++
// }

//do while loop
// i = 5;
// do {
//   console.log("This will print once");
//   i++;
// } while (i < 5);

// //for of
// const fruits = ['apple', 'banana', 'cherry'];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// //for in

// const person = { name: 'Alice', age: 25 };

// for (const key in person) {
//   console.log(key, person[key]);
// }

//Break , Continue

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//       break; // exit loop when i is 5
//     }
//     console.log(i);
//   }
  

//   for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//       continue; // skip when i is 3
//     }
//     console.log(i);
//   }
  

//conditional statements
// let mm=9
// if (mm >11) {
//     console.log("haha")
//   } else if (mm===11) {
//     console.log("ma")
//   } else {
//     console.log("lla")
//   }
  


//switch  case statement
// let a =5;
// let spelling;
// switch (a) {
//     case 1:
//         spelling = "One";
//         brreak;
//     case 2:
//         spelling = "Two";
//         break;
//     case 3:
//         spelling = "Three";
//         break;
//     case 4:
//         spelling = "four";
//         break;
//     default:
//         spelling = "invalid";
// }
// console.log(spelling);


//Exception handling

// try {
//     console.log(a/0)
// } catch (ArithmaticError) {
//     console.log("Something went wrong:", ArithmaticError.message);
// }
// finally {
//     console.log("i am donne")
// }


