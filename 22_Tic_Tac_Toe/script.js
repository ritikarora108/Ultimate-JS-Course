let currentPlayer = 'X';
let grid = Array(9).fill(null);
let move_count = 0;

const possibleWinningConfigurations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const gameDraw = () => {
    document.write('Draw!!');
}

const isEqualArrayElements = (arr) =>{
    const base_el = grid[arr[0]];
    for (const index of arr)
    {
        if (base_el != grid[index]) return false;
    }
    return true;
}

const checkWinner = () => {
    for (const config of possibleWinningConfigurations) {
        if (grid[config[0]] !== null && isEqualArrayElements(config)) {
            document.write(`Winner is ${currentPlayer} !!`);
        }
    }
}

function handleClick(el) {
    const id = Number(el.target.id);
    if (grid[id] !== null) return;
    grid[id] = currentPlayer;

    el.target.innerText = currentPlayer;
    move_count++;
    checkWinner();
    if (move_count === 9) {
        gameDraw();
    }
    currentPlayer = (currentPlayer == 'X' ? 'O' : 'X');

}

const cols = document.querySelectorAll('.col');
for (const col of cols) {
    col.addEventListener('click', handleClick);
}