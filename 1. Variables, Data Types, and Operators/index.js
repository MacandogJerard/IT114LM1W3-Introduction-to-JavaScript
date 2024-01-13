/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
const val = 6.9;
console.log(val);

// TODO 1.2 Use the let keyword to define a variable.
// Your code here

let num= 24;
console.log(num)
// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here

const word = "Boxi";
console.log(word)

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 
console.log("var is function-scoped and can be both re-declared and updated")
console.log("let is block-scoped and can be updated, but not re-declared")
console.log("const is block-scoped and cannot be updated or re-declared.")

// TODO 1.4 Try out the different arithmetic operators
// See https:/
//developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
const x = 2 + 1 + 3;

console.log(x);


// Checkpoint 1.2 What operators did you use?
// Answer: plus
// Your code here
console.log("I used plus sign operator")

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let a = 'nick';
let b = 'juris';
let c = 'eric';
let result = a + b + c; 

console.log(result);




// Checkpoint 1.3 What operators did you use?
// Answer: 
console.log("I used Concatenation");


// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
let z = true;
let y = false;
let result1 = z && y;


console.log(result1);
// Checkpoint 1.4 What operators did you use?
// Answer: 
console.log("I used Logical AND (&&) operations");



// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
let m = 7;
let n = 5;
let result2 = a > b; // true

console.log(result2)


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here
console.log("The expression [] == false evaluates to true in JavaScript. This is because JavaScript performs type coercion when using the == operator. The empty array [] is converted to an empty string, and the boolean false is converted to the numeric value 0");

