// Loops - for | while | do while

// For loop -> if you know how many times to loop

// for (let i = 0; i < 10; i++)
// {
//     console.log("Iteration " + i);
// }


// While loop -> terminating condition is known, but unsure about the number of iterations

let initial_pos = 34;

const final_pos = 50;

while (initial_pos != final_pos)
{
    console.log("Stepped from " + initial_pos + " to : " + ++initial_pos);
}


//  Number Guessing Game
console.log("Number Winning Game!")

const winningNumber = 40;

let guessedNumber = 0;
alert("Enter 0 to lose!");

do {
    guessedNumber = parseInt(prompt("Enter your guessed number"));
    switch (guessedNumber) {
        case winningNumber: {
            alert("You won the game!");
            break;
        }
        case 0: alert("You lost!");
            break;
        default: alert("Retry!")
    }
    
} while(guessedNumber!=0 && guessedNumber!=winningNumber)