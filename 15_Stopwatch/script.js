let time = parseInt(prompt("Enter time in seconds")); 

const button = document.getElementById('start-button');

const stopwatch = document.getElementById('stopwatch');


const displayTime = () => {
    let interval = setInterval(() => {
        stopwatch.innerText = time;
        if (time === 0) {
            stopwatch.innerText = "Time's up!";
            clearInterval(interval);
            return;
        }
        time--;
    }, 1000);
}

button.addEventListener('click', displayTime);


