// What if you only want to execute the function once all the arguments are available ? => Apply concept of Currying

// function add(a, b, c) {
//     return a + b + c;
// }
// console.log(add(2, 3, 5));


// function add(a) {
//     return function (b) {
//         return function (c) {
//             return c + b + a;
//         }
//     }
// }


// Modern javascript syntax

const add = (a) => (b) => (c) => a + b + c;

console.log(add(2)(3)(5));


// function sendAutoEmail(to) {
//     return function (subject) {
//         return function (body) {
//             return `Sending email to ${to} with subject ${subject} : ${body}`
//         }
//     }
// }


const sendAutoEmail = to => subject => body => `Sending email to ${to} with subject ${subject} : ${body}`;

console.log(sendAutoEmail("ritikSpamId@google.com")("Order Confirmation")("Hey Ritik, your order is confirmed!"))

