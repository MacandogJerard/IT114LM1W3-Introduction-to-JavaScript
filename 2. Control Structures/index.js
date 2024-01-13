/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if (randomNumber > 50) {
    console.log("more than fifty promise");
  }
  else{
    console.log("less than fifty na sad")
  }
// TODO 2.2 Display whether the random number is odd or even
// Your code here

if (randomNumber % 2 == 0) {
  console.log("The random number is even.");
} else {
  console.log("The random number is odd.");
}
// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here

if (randomNumber % 3 == 0) {
  console.log("fizz");
} 
else if(randomNumber % 5 ==0) {
  console.log("buzz");
}
else if(randomNumber % 3 || randomNumber % 5){
    console.log("fizzbuzz");
}
else{
    console.log("not divisible by fizz, buzz and fizzbuzz")
}

//toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
const toDisplay = randomNumber % 2 === 0 ? "Even" : "Odd";
console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: 
console.log("Switch statements in JavaScript are control flow statements that allow you to select one of many code blocks to be executed based on the value of an expression. Switch statements are useful when you have a single expression that you want to compare against multiple possible values. They provide a more concise and readable alternative to using multiple if-else statementsswitch statements have limitations. They can only be used for equality comparisons and are not suitable for complex conditions or range-based checks. In such cases, if-else statements or other control flow structures may be more appropriate.")

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for (let i = 1; i <= n; i++) {
    console.log(i);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let a = 0;
while (a < list.length) {
  console.log(list[a]);
  a++;
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: 
console.log("while loop: The condition is checked before executing the loop body. If the condition is false initially, the loop body is never executed. do-while loop: The loop body is executed at least once before checking the condition. The loop will continue executing as long as the condition is true.")

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
for (const item of list) {
    console.log(item);
  }

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
for (let index in list) {
    console.log(list[index]);
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach(function(value) {
    console.log(value);
  });
// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 
//console.log("Use the for...of loop when you want to iterate over the values of an iterable object, such as an array.")
//console.log("Use the for...in loop when you want to iterate over the enumerable properties of an object.")
//console.log("Use the .forEach() method when you specifically want to iterate over each element of an array and need access to both the element and its index.")



// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing


/*if(denominator === 0){
    throw new Error("Division by zero error")
} else {
    console.log(numerator / denominator);
}


*/
