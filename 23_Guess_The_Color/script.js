// document.body.style.backgroundColor="red"

const colorCodeContainer = document.getElementById('color-code');
const options_container = document.getElementById('options-container');

const score_display = document.getElementById('score');



let randomColor = null;
let score = 0;

function incrementScore(){
    score++;
}

function generateRandomNumberBetween(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function generateRandomColorRGB() {
    const red = generateRandomNumberBetween(0, 255);
    const green = generateRandomNumberBetween(0, 255);
    const blue = generateRandomNumberBetween(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function validateResult(el) {
    const selectedColor = el.target.style.backgroundColor;
    if (selectedColor == randomColor) {
        incrementScore();
    } else {
        score = 0;
    }
    window.localStorage.setItem("score", score);
    startGame();
}

function startGame() {
    score_display.innerText = Number(window.localStorage.getItem('score')) ?? 0;
    options_container.innerHTML = null;
    randomColor = generateRandomColorRGB();
    colorCodeContainer.innerText = randomColor;

    let randomIndex = generateRandomNumberBetween(0, 5);

    for (let i = 0; i < 6; i++)
    {
        const div = document.createElement('div');
        div.style.backgroundColor = (i == randomIndex ? randomColor : generateRandomColorRGB());
        options_container.append(div);

        div.addEventListener('click',validateResult);
    }
}

window.addEventListener('load', startGame);
