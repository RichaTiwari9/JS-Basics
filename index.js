//1. ways to print in js
// console.log("helloooo worrrrld");
// alert("me");
// document.write("this is doc write");

//2. js console API
// console.log("hello world", 4 + 6, "another log");
// console.warn("this is a warning");
// console.error("thsi is an error");

//3. js variables
// its containers to store data values
var number1 = 99;
var number2 = 999;   
// console.log(number1 + number2);

//4. data types in js
//numbers
var num1 = 9;
var num2 = 45;

//string
var str1 = "this is a string";
var str2 = 'this is also a string';

//objects (key value pairs)
var marks = {
    aman: 90,
    richa: 99,
    ananya: 99.9,
}
// console.log(marks);

//booleans
// var a = true;
// var b = false;
// console.log(a, b);

var arr = [1, 2, 'argentina', 4, 5]
// console.log(arr);

//operators in js
// arithmetic operators
var a = 100;
var b = 10;
// console.log('the value of a+b is', a+b);
// console.log('the value of a-b is', a-b);
// console.log('the value of a*b is', a*b);
// console.log('the value of a/b is', a/b);

//assignment operators
var c = b;
// c += 2;
// same can be the the case with other operators
// console.log(c);

//comparison operators 
var x = 54;
var y = 90;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// logical operators 
// // logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

//logical or 
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// logical not
// console.log(!false);
// console.log(!true);

// function avg(a, b) {
//     const z = (a + b)/2
//     return z;
// }
// m1 = avg(4, 6);
// m2 = avg(14, 16);
// console.log(m1, m2);

//conditionals in js

/*var age = 9;
 
if (age > 9) {
    console.log('you are not a kid');
}
else{
    console.log('u r a kid');
}*/

function avg(a, b) {
    return (a+b)/2;
}
c1 = avg(4, 6);
c2 = avg(14, 16)
console.log(c);