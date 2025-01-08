// Functions - A block of code that performs a particular task

function sayHello()
{
    console.log("Hello!");
}
sayHello();  // Calling a function


//  function fName (arg1, arg2, arg3) -> arguments


// Accept unlimited arguments
function add() {
    console.log(arguments);
    let result = 0;
    for (let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log("Result: " + add(13, 34, 21, 11));  // Parameters

// Rest operator
function calculateTotalPrice(...price)
{
    let totalPrice = 0;
    for (let i = 0; i < price.length; i++)
    {
        totalPrice += price[i];
    }
    return totalPrice;
}

console.log("Total Price : " + calculateTotalPrice(46, 2, 12, 5, 22));
