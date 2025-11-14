// functionas and parameters in js

// function myFunction(message){
//  console.log("message: ", message)
// } 
// myFunction("hello!")

// let result;
// function additionOfTwoNum(number1, number2){
//   result = number1+number2;
//   return result;
// }
// console.log(additionOfTwoNum(10, 30))

// ******************** check palindrome **********************8
/*let num = 121;
let original = num;

function palindromeNumber(number)
{
  let reverse = 0;
  while(number!=0)
  {
    
    let rem = number%10;
    reverse = (reverse*10)+rem;
    number = Math.floor(number/10);
  }
    return reverse;
}
if(palindromeNumber(num) == original)
{
  console.log("The number is a palindrome number");
}
else{
  console.log("Its not a palindrome number");
}
*/
// **************************
/*
function checkLogin(userName){
  if(userName==undefined)
  {
    console.log("Enter the userName!")
  }
  else{
     return `${userName} is logged in!` 
  }
}
      // console.log(checkLogin()); // undefined
console.log(checkLogin("swati"));
*/

// now to pass the multiple values in the function we have rest operator( ... ) 
// suppose we have multiple values to pass in function .. as per the requirement ..
// that time we can easily take all values using rest operator below is eg.

// function calculateCardPrice( ...price)
// {
//   return price;
// }
// console.log(calculateCardPrice(100, 2000, 200, 450, 600));

// ***********************how to pass the object in function************************

// const obj1 = {
//   name :"sakshi",
//   email : "sakshi@gmail.com",
//   phone : 98765432
// }

// function handleobject(obj1){
// return ` the username : ${obj1.name}, email is: ${obj1.email}, phone is : ${obj1.phone}`;
// }
// console.log(handleobject(obj1));
//OR  

//console.log(handleobject({ username:"usha ",email:"usha@gmail.com", phone :987687}));

//********************** passing Array to function */
/*
let arr = [100, 200, 300, 400, 500]

function takingArray(arr)
{
  return arr;
}
// console.log(takingArray(arr)) // or

console.log(takingArray([20, 10, 30, 5, 25]))

*/
// console.log(createfun1(10))

// function createfun1(num1)
// {
//    return num1 + 1 
// }

// another way to create a function


      // console.log(resultOfFun(20)); // if we declare the function using below syntax we can't access the function from anywhere .
      // ERROR: Cannot access 'resultOfFun' before initialization

// const resultOfFun = function(num)
// {
//   return num + 10;
// }
// console.log(resultOfFun(20));


/******************************THIS AND ARROW FUNCTION *******************/
/*
const user = {
  username : "swati",
  price : 999,

  welcomeMessage: function()
  {
    console.log(`${this.username} , welcome to website`);
  }
}
user.username ="usha" 
console.log(this) 
user.welcomeMessage();


function myfunction(){
  console.log(this); // returns global object
}

myfunction()
*/

// const chai = function()
// {
//   let username= "geet"
//   console.log(this.username); // undefined
// }

// syntax of arrow functions : const variableName = () => {}
//eg.
/*
const chai = () => {
  let username ="geeta"
  console.log(this);
}
chai()
*/
//**********/
/*
// explicite return

const addTwo = (num1, num2) => {
  return num1 + num2;
}
console.log(addTwo(10,20))
*/
// another syntax of arrow fun .. called
//  implicite return ..where you didn't need to write {} and return keyword

//eg.
// const addTwo = (num1, num2) => num1 + num2

//or     // this is implicite return

// const addTwo = (num1, num2) => (num1 + num2)    

//note: if you written it in {} then you should add return keyword also ..or just write it in ()
// console.log(addTwo(20,20))

//now how to return the object in arrow function

// const addTwo = (message) => ({username: "priya"})

// console.log(addTwo("hello"))

//***** Immediately Invoked Function Expressions(IIFE) ************/
/*
(function chai(){
  //named IIFE
  console.log(`hello !`);
})();
*/
( (name) => {
  //without naming function
  console.log(`welcome ${name}`);
} )('swati')

/******************** revise notes********************* */

//ARROW FUNCTIONS: They provide a shorter and cleaner way to write functions in JavaScript.
/*
IIFE = a function that runs immediately after creation.

General format:

(function() {
  console.log("runs immediately");
})();


Arrow-function IIFE:

(() => {
  console.log("arrow iife");
})();


With parameter:

((name) => {
  console.log(`hello ${name}`);
})("Swati")

*/
//********* Arrow functions were introduced in ES6. They provide a shorter and cleaner way to write functions in JavaScript.*******/
/*
Example:

const add = (a, b) => a + b;

 Key Features of Arrow Functions
 1. Shorter Syntax

Traditional function:

function greet(name) {
  return "Hello " + name;
}


Arrow function:

const greet = (name) => "Hello " + name;

2. Implicit Return

If the function has only one statement, you can skip:

return

{ } (curly braces)

Example:

const square = (n) => n * n;

 3. No own this keyword

Arrow functions do not have their own this.
They use the this value from the surrounding (parent) scope.

Example (important for callbacks):

function Person() {
  this.age = 20;

  setInterval(() => {
    this.age++;  
    console.log(this.age);
  }, 1000);
}


If you use function(){}, this behaves differently.

 4. Cannot be used as constructors

You cannot use arrow functions with new keyword:

const Person = () => {};
new Person(); //  Error

 5. Useful for small functions / callbacks

Example:

[1, 2, 3].map(num => num * 2);

Arrow functions = shorter, cleaner functions without their own this, often used for simple operations and callbacks.
*/