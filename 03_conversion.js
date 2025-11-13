// type casting in java

// let score = null
// console.log("type of score is : " ,typeof(score));

// let convertedInNum =Number(score);
// console.log("type of score is : " ,typeof(convertedInNum));
// console.log(convertedInNum)   

/* o/p:
  String -> Nan
  number ->number
  boolean ->number
*/

// let isEmpty = false;
// let stringConversion = String(isEmpty)
// console.log(typeof(stringConversion));
// console.log("bolean is converted to String: ",stringConversion );


// let isLoggedIn = 0
// let login = Boolean(isLoggedIn)
// console.log(typeof(login));
// console.log(login);

// let number = 20
// let string1 = String(number)
// console.log(string1);
// console.log(typeof(string1))

/*********************Operations********************* */

// let str1 = "hello"
// let num = 101;

// let concate = str1+num;
// console.log("concated String is: ",concate);

// console.log(2+10);
// console.log(20-10);
// console.log(20*10);
// console.log(20/10);
// console.log(20%10);
// console.log(2**2); 
// console.log(2**3); //to find power

// console.log(2+2+"20")  // first it does addition and then merge it with String
// console.log("10"+10+4) // here it merge all bacause first element is string


//********** non primitive datatypes********* */

//array:
// const fruits =["apple", "banana", "watermelon"];

// console.log("array of fruits : ", fruits);

// objects

// let craeteObj = {
//  name : "Swati",
//  age : 22,
//  education : "B.Tech"
// }
// console.log(craeteObj)
// console.table([craeteObj])

//function

// const createFunction = function()
// {
//   console.log("hello from function");
// }
// console.log(createFunction);
// console.log(typeof(createFunction));

// const id = Symbol('123') 
// const anotherId = Symbol('123')

// console.log(id == anotherId) //op -> false 
//because Symbol datatype is used to define the unique values

// String interpolation -> ${variable name}

// let firstName = "swati"
// let lastName = "lokhande"

// console.log(`my full name is : ${firstName} ${lastName}`);


//creating a string

// const name = new String("swati")
// console.log(name);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.indexOf('a'));
// console.log(name.length);
// console.log(name.charAt(2));
// console.log(name.startWith());
// console.log(name.slice(2 , 5));
// console.log(name.replace('i','ii'));
// console.log(name.substr());
// console.log(name.subString(0,4));

// const education = "     b.Tech   ";
// console.log(education.trim());

// console.log(name.charAt(2));
// console.log(name[4]);
// console.log(name[1]);


let str4 = "javascript is very easy language\n";
// console.log(str4.includes("easy"));
// console.log(str4.endsWith("language"));
// console.log(str4.repeat(3));
// console.log(str4.replaceAll("javascript" , "java"));

// console.log(str4.split("a"));
// console.log(str4.toString());
// console.log(str4.valueOf());

const balance = 100000.87
// console.log(balance.toFixed(2));
// console.log(balance.toPrecision(4));
// console.log(balance.toLocaleString('en-IN')); // it adds the , between numbers

// ************************Math***********************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(10 ,20 , 3, 5, 9, 60));
// console.log(Math.max(4 , 5 ,10, 70, 26))

// console.log(Math.random());
// console.log(Math.random()*10000);
// console.log((Math.random()*10) + 1);


// const min=10
// const max= 20
// console.log(Math.floor(Math.random()*(max-min +1))+min)


console.log(Math.floor(Math.random()*10000));
