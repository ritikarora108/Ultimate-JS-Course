// Higher Order functions and Callback

// add is a higher order function : takes another function as an argument
function add(num1, num2, cb)    // cb is 'callback'
{
    let result = num1 + num2;
    cb(result);
}

add(6, 7, function (value) {
    console.log(value)
})

add(4, 5, val => console.log(val))


function addNumbers(num1,num2,num3) {
    let result = num1 + num2 + num3;
    return () => { console.log(result) };
}

let displayResult = addNumbers(1, 15, 3);
displayResult();



// Callback Hell ->

// function one(cb)
// {
//     cb(one);
// }                                             // Call stack:
// function two(cb)                             //  | ......  |
// {                                            //  |two(one) |
//     cb(two);                                 //  |one(two) |
// }                                            //  |two(one) |
// one(two);                                   //   |one(two) |
//                                              //  ----------     