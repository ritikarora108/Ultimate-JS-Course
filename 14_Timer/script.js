const timer = document.getElementById("time");

const stop_button = document.getElementById('stop-button');

function showTime()
{
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    timer.innerText = time;
}

let interval = setInterval(showTime, 1000);

stop_button.addEventListener('click', () => {
    clearInterval(interval);
    console.log("Timer Stopped");
})

