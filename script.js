// // Addition
// let a = prompt("Input the first number");
// a = Number(a);
// let b = Number(prompt("Input the second number"));
// let c = alert(a + b);

// // Subtraction
// let d = Number(prompt("Input the First Number"))
// let e = Number(prompt("Input the Second Number"))
// let f = alert(d - e);

// // Multiplication
// let g = Number(prompt("Input the First Number"))
// let h = Number(prompt("Input the Second Number"))
// let i = alert(g * h);


// // Quadratic Formula Calc1
// let a = Number(prompt("Input the value of a"));
// let b = Number(prompt("Input the value of b"));
// let c = Number(prompt("Input the value of c"));
// let d = (b**2 - 4*a*c);
// let r = ( d ** 0.5);
// let t = (-b + r);
// let y = (-b - r);
// let z = (2 * a);
// let f = alert(t/z);
// let q = alert(y/z);

// // Quadratic Formula Calc2
// let a = Number(prompt("Input the value of a"));
// let b = Number(prompt("Input the value of b"));
// let c = Number(prompt("Input the value of c"));

// let numerator = -b + (b**2 - 4*a*c);
// let denominator = 2 * a;
// let x = numerator/denominator;
// alert(x);

// let numerator2 = -b - (b**2 - 4*a*c);
// let y = numerator2/denominator;
// alert(y);

// // Quadratic Formula Calc3
// let a = Number(prompt("Input the value of a"));
// let b = Number(prompt("Input the value of b"));
// let c = Number(prompt("Input the value of c"));

// let step_1 = b ** 2 - 4 * a * c;









// PRACTICE!!!!!!!!!
// preferrable naming CONVENTION: camelCase
// symbols apart from Dollars and Underscores are not allowed in naming variables

// USING METHODS FOR NUMBERS

// let firstNum = 4.5;
// let secondNum = 3.7

// Rounds off the number to the nearest whole number irrespective of the decimal
// console.log(Math.ceil(firstNum));

// Rounds off the number to the nearest whole number irrespective of the decimal
// console.log(Math.floor(3.7));

// RRounds off the number to the nearest whole number respective of the decimal
// console.log(Math.round(firstNum));
// console.log(Math.round(secondNum));

// EVERY METHOD TAKES IN ARGUMENT THAT IT EVALUATES
// The Math.pow takes in two arguments 1.The number  2. The Index
// Math.pow(number, index);
// console.log(Math.pow(2,4));

// // Math.sqrt takes only one argument
// console.log(Math.sqrt(16));

// // Let's generate a random number using Math.random
// // console.log(Math.round(Math.random() * 10));

// // let randNum = Math.random() *10
// // let wholeNum = Math.round(randNum);
// // alert(wholeNum)

// // STRING METHODS
// let firstName = "Lancer NabASF";
// console.log(firstName);

// // converts string to lower case
// console.log(firstName.toLowerCase());

// // converts strings to Uppercase
// console.log(firstName.toUpperCase());

// // Shows the position of a character in a string
// // JS strings start counting from position 0 not 1
// console.log(firstName.charAt(2));

// // return the position of n
// console.log(firstName.indexOf("n"));

// // DELETE LETTERS FROM STRINGS
// // substring takes in 2 arguments 
// // 1. A start argument 2. An end argument which is not included in the deleting process
// // please Note that substring displays the non deleted characters
// console.log(firstName.substring(0,3))

// // Slice takes in 2 arguments 
// // 1. A start argument 2. An end argument which is not included in the deleting process
// // please Note that slice displays the non deleted characters
// console.log(firstName.slice(0,3));


// // LET'S SPLIT EACH CHARACTER IN OUR NAME TO SOMETHING CALLED AN ARRAY
// // THE SPLIT METHOD TAKES IN ONE ARGUMENT(CHARACTER) AND SPLITS AT THE CHARACTER
// // THE SPLIT WILL OCCUR AT THE SPACE BAR
// console.log(firstName.split(" "))

// //CHECK IF THE STRING INCLUDES A CHARACTER
// console.log(firstName.includes("NAB")); 
// console.log(firstName.includes("Nab"));
// console.log(firstName.includes("lan"));
// console.log(firstName.includes("Lan"));
// // console.log(firstName.startsWiths("N"));    

// // I've finally found a suitable surname
// // Let's replace NabASF

// console.log(firstName.replace("Lancer NabASF", "Mapelujo Abdulkareem"));

// // ARRAYS
// // A beautiful way of grouping elements together.

// // Ola decides to make a list his dream cars

// let car1 = "Volvo";
// let car2 = "BMW";
// let car3 = "Rolls";

// // SENIOR DEV THIS IS OLD SCHOOL

// let carsILike = ["Volvo", "BMW", "Rolls"];
// // let's display our array

// console.log(carsILike);

// // let's add a benz to olla's collection
// // Add to the end of the array
// carsILike.push("Benz");
// console.log(carsILike);

// // Add to the beginning of the array
// carsILike.unshift("Truck");
// console.log(carsILike);

// // Let's remove the first element of the array
// carsILike.shift();
// console.log(carsILike);

// // let's remove the last element from the array
// carsILike.pop();
// console.log(carsILike);

// // Array positions are zero based index
// // let's delete a car carrying position 1
// // splice takes 2 arguments
// // 1. The start index 2. The number of elements to be deleted
// carsILike.splice(1,1);
// console.log(carsILike);

// // ADDING TWO ARRAYS TOGETHER
// let myFavFoods = ["Beans", "Bread", "Dodo", "Chicken"]
// console.log(carsILike.concat(myFavFoods));















// CONDITIONALS!!!!!!!!!!!!!!!!!!!!!!!
// THE HEART OF PROGRAMMING
// TEACHING YOUR CODE
// IF ELSE STATEMENT

// myCondition = prompt("What is your mother tongue?");
// if (myCondition === "English") {
//     alert('Good Morning');
// }
// else if (myCondition === "French"){
//     alert("Bonjour");
// }
// else if (myCondition === "Yoruba") {
//     alert("Ekaaro");
// }
// else{
//     alert("Language not Supported");
// }

// GUESSING GAME

// let guessNum = Math.random() *10;
// guessNum = Math.round(guessNum);

// let userNum = Number( prompt("Guess the Number"));

// if (userNum === guessNum) {
//     alert("CONGRATULATIONS!!!")
// }
// else {
//     alert("Wrong guess, Try Again!!")
// }

// let myOperation = Number(prompt("For Addition press1 For Subtraction press2 For Multiplication 3 For Division press4"));
// let firstNum = Number(prompt("Input the first number"));
// let secondNum = Number(prompt("Input the second number"));

// if (myOperation === 1) {
//     alert(firstNum + secondNum);
// }
// else if (myOperation === 2) {
//     alert(firstNum - secondNum);
// }
// else if (myOperation === 3) {
//     alert(firstNum * secondNum);
// }
// else if (myOperation === 4) {
//     alert(firstNum / secondNum);
// }

// Making a Keyless Car
// let standardAge = 18;
// let userAge = Number(prompt("Input your Age"));

// if (userAge < standardAge) {
//     alert("Sorry, you are too young to drive this car. Powering Off!");
// }
// else if (userAge > standardAge) {
//     alert("Powering On, Enjoy the ride!");
// }
// else if (userAge = standardAge) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// }


// LOOPS
// FOR LOOP
let num = Number(prompt("Provide a number"));
if (num % 2 === 0) {
    alert("The number is an even number");
}
else {
    alert("The number is an odd number");
}