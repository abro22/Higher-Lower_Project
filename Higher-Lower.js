
// alert("Welcome to the Higher/Lower game! Play by entering a number of choice between 1 and 100 into the text field. If the number needs to be higher or lower you will be prompted.")



let randomNumber = Math.floor(Math.random() * 100 + 1);

console.log(randomNumber)

const guess = document.getElementById("numberBox")

console.log(guess)

const submit = document.getElementById("submit")
const hint = document.getElementById("hint")

// const answer = guess.value

// console.log(answer)

function guessCheck() {

    const answer = guess.value

    if (answer == randomNumber) {
        hint.textContent = "You guessed the correct number!"
    } else if (answer > randomNumber) {
        hint.textContent = "Too high, guess a lower number."
    } else {
        hint.textContent = "Too low, guess a higher number."
    }
}







