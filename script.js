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

let firstNum = 4.5;
let secondNum = 3.7

// Rounds off the number to the nearest whole number irrespective of the decimal
console.log(Math.ceil(firstNum));

// Rounds off the number to the nearest whole number irrespective of the decimal
console.log(Math.floor(3.7));

// RRounds off the number to the nearest whole number respective of the decimal
console.log(Math.round(firstNum));
console.log(Math.round(secondNum));

// EVERY METHOD TAKES IN ARGUMENT THAT IT EVALUATES
// The Math.pow takes in two arguments 1.The number  2. The Index
// Math.pow(number, index);
console.log(Math.pow(2,4));

// Math.sqrt takes only one argument
console.log(Math.sqrt(16));

// Let's generate a random number using Math.random
// console.log(Math.round(Math.random() * 10));

// let randNum = Math.random() *10
// let wholeNum = Math.round(randNum);
// alert(wholeNum)

// STRING METHODS
let firstName = "Lancer";
console.log(firstName);

// converts string to lower case
console.log(firstName.toLowerCase());

// converts strings to Uppercase
console.log(firstName.toUpperCase());

// Shows the position of a character in a string
// JS strings start counting from position 0 not 1
console.log(firstName.charAt(2));
console.log(firstName.indexOf("n"));