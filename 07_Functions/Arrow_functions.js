// Arrow functions
() => { }

// 1. Syntax

const sayHello = () => {
    console.log("Hello !");
}
sayHello();


// const add = (a, b) => {
//     return a + b;
// }

const add = (num1, num2) => num1 + num2;  // One liner
console.log(add(2, 3)); 


// 2. 'arguments' keyword

// const addNumbers = () => {
//     console.log(arguments);  -> arguments is not defined in arrow functions
// }

const getNumbers = (...numbers) => {
    console.log(numbers);  
}

getNumbers(1, 2, 3, 4, 5)


// 3. Hoisting in JavaScript is a mechanism where the interpreter moves all variable and function declarations to the top of their respective scopes before executing the code

sayHi();
//   js functions ko pehle hi memory me load krleti hai doesn't matter, agr hm code me use define hone se pehle call kr bhi le 
function sayHi()
{
    console.log("Hi");
}


// Hoisting does not work in case of Arrow functions
// sayHey();
// const sayHey = ()=> console.log("Hey!")

// 4. 'this' keyword

const person = {
    firstName: 'Ritik',
    displayName: function displayName(){
        console.log(this.firstName);
    }
}

person.displayName()


const person2 = {
    lastName: 'Arora',
    showLastName: () => {
        console.log(this)  // ->Empty in case of node environment, else points to window object : global scope
        console.log(this.lastName);
    }
}
person2.showLastName()