// Variables
// var | let | const

// Datatype varName = value -> Strongly typed language

// Js- loosely typed lang
// Dynammically assigned 

var age = 18;
console.log(age);
console.log(typeof age); 

var num1 = 10;
var num2 = 20;
console.log(num1 + num2);

age = "Eighteen";
console.log(age);

console.log(typeof age);

//  Scope of var : Global, it can also be used in console

if (true) {
    var firstName = "Ritik";
}
console.log(firstName);

console.log(lastName);
var lastName = "Arora";
console.log(lastName);


// let ->local scope

let platform = "Codeforces";

// const -> local scope, and value can't be reassigned

const pie = 3.14;
console.log(pie);
// pie = 3; // -> error, reassigning value to const





