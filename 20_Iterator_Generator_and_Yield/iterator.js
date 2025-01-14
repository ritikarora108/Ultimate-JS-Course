const start_input = document.getElementById('start-input');
const end_input = document.getElementById('end-input');
const step_input = document.getElementById('step-input');

const submit_button = document.getElementById('submit-btn');

const next_button = document.getElementById('next-btn');

const iteratorDisplay = document.getElementById('iterator');

let start=null, end=null, step=null;

submit_button.addEventListener('click', () => {
    start = parseInt(start_input.value);
    end = parseInt(end_input.value);
    step = parseInt(step_input.value);
    iteratorDisplay.innerText = start;
})


next_button.addEventListener('click', () => {
    if (start === null) {
        alert('First enter values for start,end,step and submit!');
        return;
    }

    start += step;
    if (start < end) {
        iteratorDisplay.innerText = start;
    } else {
        alert('Cannot process next iteration, it will go beyond end_input');
        next_button.remove();
    }
})
