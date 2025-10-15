console.log("hello");

// alert('hello this is Qazi')

// How to write a comment inline

// Variables
var b = "smoothie";
console.log(b);

var someNumber = 45;
// console.log(someNumber);

// Manipulate the Dom with JavaScript
/* ... It's just a fancy way of saying
change HTML with JavaScript*/
// var age = prompt('What is your age?');

// document.getElementById('someText').innerHTML = age;

// Numbers in JavaScript
var num1 = 10;

// Increment num1 by 1
num1++;
// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainders %
console.log(num1 % 6);

// Increment/decrement by 10
num1 += 10;
console.log(num1);

// Functions
function fun() {
    console.log("this is a function");
}

fun();

/* Let's create a function that takes in a name
and says hello followed by your name

For example

Name: "Qazi"
Return: "Hello Qazi"
*/

function greeting(yourName) {
    var result = "Hello " + yourName;
    console.log(result);
    return result;
}

// var name = prompt('What is your name?')
// greeting(name);

// How do arguments work in functions?

function sumNumbers(num1, num2) {
    console.log(num1 + num2);
}

sumNumbers(10, 10);

// While loops

var num = 0;

// while(num < 100) {
//     num += 1;
//     console.log(num);
// }

for (let num = 0; num <= 100; num++) {
    console.log(num);
}

// Data types
let yourAge = 18;
let yourName = "Bob";
let name = { first: "Jane", last: "Doe" }; // object
let truth = false; // boolean
let groceries = ["apple", "banana", "oranges"]; // array
let random; // undefined
let nothing = null; // value null

// Strings in JavaScript (common methods)
let fruit = "banana";
let moreFruits = "banana\napple"; // new line
// console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf("nan"));
console.log(fruit.slice(2, 6));
console.log(fruit.replace("ban", "123"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
fruit = "banana,apple,orange,blackberry";
console.log(fruit.split(",")); // split by a comma

let fruits = ["banana", "apple", "orange", "pineapple"];
fruits = new Array("banana", "apple", "orange", "pineapple");

console.log(fruits[2]);

fruits[0] = "pear";

console.log(fruits);

for (let i = 0; i < fruits.length; ++i) {
    console.log(fruits[i]);
}

// array common methods
console.log("to string:", fruits.toString());
console.log(fruits.join(" * "));
console.log(fruits, fruits.pop(), fruits);
console.log(fruits.push("blackberry"), fruits);
console.log(fruits[4]);
console.log(fruits[3]);
fruits[fruits.length] = "coconut";
console.log(fruits);
fruits.shift(); // remove first element from an array
console.log(fruits);
fruits.unshift("kiwi"); // add first element to an array
console.log(fruits);
let vegetables = ["asparagus", "tomato", "broccoli"];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
// sorted in ascending order
console.log(
    someNumbers.sort(function (a, b) {
        return a - b;
    })
);
// sorted in descending order
console.log(
    someNumbers.sort(function (a, b) {
        return b - a;
    })
);

//let emptyArray = new Array();
let emptyArray = [];

for (let num = 0; num <= 10; ++num) {
    emptyArray.push(num);
}
console.log(emptyArray);

// Objects in JavaScript
// dictionaries in Python

let student = {
    first: "Rafeh",
    last: "Qazi",
    age: 25,
    height: 170,
    studentInfo: function () {
        return this.first + "\n" + this.last + "\n" + this.age;
    },
};

// console.log(student.first);
// console.log(student.last);
// console.log(student["first"]);
// console.log(student["last"]);

// student.first = 'notRafeh';
// console.log(student.first);

// student["first"] = 'yesRafeh';
// console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// Conditionals, Control flow (if else)
// 18-35 is my target demographic
// && AND
// || OR
var age = 45; // prompt('What is your age?');

if (age >= 18 && age <= 35) {
    status = "target demo";
} else {
    status = "not my audience";
}
console.log(status);

switch (2) {
    case 0:
        text = "weekend";
        break;
    case 5:
        text = "weekend";
        break;
    case 6:
        text = "weekend";
        break;
    default:
        text = "weekday";
}
console.log(text);
