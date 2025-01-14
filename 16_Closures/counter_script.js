const counter = document.getElementById('counter');

const inc_btn = document.getElementById('increment');
const dec_btn = document.getElementById('decrement');


function displayCounter(count) {
    counter.innerText = count;
}
// Do all validations on input counter some other day..
let count = parseInt(prompt("Enter counter value"));

displayCounter(count);

function increment()
{
    function incrementCounter() {
        count++;
        displayCounter(count);
    }
    return incrementCounter;
}

function decrement()
{
    function decrementCounter()
    {
        count--;
        displayCounter(count);
    }
    return decrementCounter;
}

let inc_count = increment();
let dec_count = decrement();

inc_btn.addEventListener('click', inc_count);
dec_btn.addEventListener('click', dec_count);