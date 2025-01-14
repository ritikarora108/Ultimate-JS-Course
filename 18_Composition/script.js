// function add(...args)
// {
//     return args.reduce((a, b) => a + b, 0);
// }
function add(args)
{
    return args.reduce((a, b) => a + b, 0);
}

// function multiply(...args) {
//     return args.reduce((a, b) => a * b, 1);
// }

function multiply(args) {
    return args.reduce((a, b) => a * b, 1);
}

function square(val) {
    return val * val;
}

// function composeTwoFunction(fn1, fn2)
// {
//     return function (a,b) {
//         return fn2(fn1(a, b));
//     }
// }


// const composeTwoFunction = (fn1, fn2) => (a, b) => fn2(fn1(a, b));



// const addTwoAndSquare = composeTwoFunction(add, square);
// console.log(addTwoAndSquare(2, 3));

// const task = composeTwoFunction(multiply, square);
// console.log(task(2, 3))

// function addTwoAndSquare(a, b)
// {
//     const addResult = add(a, b);
//     const sqauredResult = square(addResult);
//     return sqauredResult;
// }



// console.log(square(add(2, 3)));
// console.log(addTwoAndSquare(2,3))


function compose(...fns) {
    return function (...value) {
        return fns.reduce((a, b) => b(a), value);
    }
}

const composeAll = (...fns) => (...val) => fns.reduce((a, b) => b(a), val);

const task1 = compose(multiply, square);
console.log(task1(3,4))

const task2 = composeAll(add, square, val => val + 1, function (val) {
    return val * 10;
})
console.log(task2(3, 5));


