// if-else statement

// Ternary operator 
let raining = true;

console.log(raining ? "WFH" : "WFO");


// Switch case

let option = 2;


switch (option) {
    case 1: {
        console.log('Namaste');
        break;
    } 
    case 2: {
        console.log('Hello');
    } 
    case 3: console.log('Bonjor!');
    default: console.log("Invalid option");
    
}

let a = 10;
let b = 20;
let op = '*';

switch (op)
{
    case '+': console.log(a + b);
        break;
    case '-': console.log(a - b);
        break;
    case '*': console.log(a * b);
        break;
    case '/': console.log(a / b);
        break;
    default: console.log('IDK');
}