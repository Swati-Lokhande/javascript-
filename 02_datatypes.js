"use strict"; // treat all js code as a newer version
// alert(5 + 10) // we are using node js, not browser

let age = 22;
let isLoggedIn = false;
let state = null;
console.log("age = ", age)
console.log(isLoggedIn)
console.log(state)

console.table([age, isLoggedIn, state]);
/* datatypes:
number -> range 2 to the power of 53
bigint
string-> ""
boolean
null -> standalone value
undefined -> if value is not aligned to variable
symbol -> for uniqueness
object 
*/

console.log(typeof undefined); // type of undefined is undefined only
console.log(typeof null); // type of null is object

/************************************ */

//creating a function in javascript

function print(){
  console.log("hello from function")
}
print()

let firstName ;
let lastName;
function message(firstName, lastName){
  console.log(`${firstName} ${lastName}`)
}
message("swati","lokhande")

let address;
let salary;
let education;

function info(address, salary,education){
  console.log(`address= ${address} salary = ${salary} education = ${education}`);
}

info("pune", 20000, "B.Tech")


let a, b, c;

function math(a,b,c){
  console.log(a+b+c);
  console.log(a*b*c);
  console.log(a/b-c);
}

math(30, 20 ,10)

//arrow function
let xyz=()=>{
  console.log("123")
}
xyz()

//for one line statement
// let x;
// let y;

// let xyzq =(x,y)=>console.log(a+b)
// xyzq(12,45)

for(let i = 0; i< 20; i++)
{
  if(i === 13) // here when the value of i = 13 it just skip it and continue..
  {
    continue;
  }
  console.log(i); // so here we get the o/p from 0 to 19 except 13 number
}


//dom => Document object model

/* target method in js
    getelementbyid
    getelementsbyclassname
    getelementbytagname
    queryselector
    queryselectorall
*/
