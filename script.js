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

// Quadratic Formula Calc2
let a = Number(prompt("Input the value of a"));
let b = Number(prompt("Input the value of b"));
let c = Number(prompt("Input the value of c"));

let numerator = -b + (b**2 - 4*a*c);
let denominator = 2 * a;
let x = numerator/denominator;
alert(x);

let numerator2 = -b - (b**2 - 4*a*c);
let y = numerator2/denominator;
alert(y);
