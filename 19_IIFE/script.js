// IIFE - Immediately Invoked Function Expresssions
// IIFE: a js function that runs as soon as it is defined

// Used to avoid polluting the global namespaces

(function add(a, b) {
    console.log(a + b);
})(3, 5);

(() => console.log('I am ES6'))();

const value = (() => 100)();
console.log(value)



const data = (async () => 
     await fetch('https://api.github.com/users/ritikarora108')
)();

console.log(data)
data.then((res) => console.log(res)).catch(err => console.log(err));


// let data;

// async function getData() {
//     return await fetch('https://api.github.com/users/ritikarora108');
// }
// data = getData();
// data.then(res => console.log(res)).catch(err => console.log(err))


const atm = (function (balance) {
    let current_balance = balance;
    function withdraw(amt) {
        if (amt > current_balance) {
            return "Are you kidding?";
        } else {
            current_balance -= amt;
            return current_balance;
        }
    }
    return { withdraw };
})(1000);

console.log(atm.withdraw(100));
console.log(atm.withdraw(100));
console.log(atm.withdraw(1000));