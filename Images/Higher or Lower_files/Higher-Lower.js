
// alert("Welcome to the Higher/Lower game! Play by entering a number of choice between 1 and 100 into the text field. If the number needs to be higher or lower you will be prompted.")



let randomNumber = Math.floor(Math.random() * 100 + 1);

console.log(randomNumber)

const guess = document.getElementById("numberBox")
const submit = document.getElementById("submit")
const hint = document.getElementById("hint")
const answer = number(guess.value)

function guessCheck() {

    // const answer = number(guess.value)

    if (answer === randomNumber) {
        hint.textContent = "You guessed the correct number!"
    } else if (answer < randomNumber) {
        hint.textContent = "Too low, guess a higher number."
    } else {
        hint.textContent = "Too high, guess a lower number."
    }
}





// numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]


