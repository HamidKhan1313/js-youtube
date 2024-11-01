// This code readibility and maintainbibility is not good
// Try to make functions for evcery task in the project

const randomNumer = parseInt(Math.random() *100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true
if(playGame ){
submit.addEventListener('click', function(e){
e.preventDefault()
const guess = parseInt(userInput.value)
console.log(guess)
validateGuess(guess)
})
}

function validateGuess(guess){
if (isNaN(guess)) {
    alert('Plese enter a valid number')
}
else if(guess < 1){
alert("Plese enter a grater number")
}
else if(guess > 100){
    alert("Plese enter a number less than 100")
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
displayGuess(guess)
displayMessage(`Game Over. Random number was ${randomNumer} `)
endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
if(guess === randomNumer){
    displayMessage('You guess it right')
     endGame();
} else if (guess < randomNumer){
displayMessage('Number is tooo low')
}
else if (guess > randomNumer){
    displayMessage('Number is tooo High')
    }
}

function  displayGuess(guess){
userInput.value = ""
guessSlot.innerHTML += `${guess}` 
numGuess++
remaining.innerHTML = `${11 - numGuess}`
}
function  displayMessage(message){
    lowOrhigh.innerHTML = `<h2>${message}</h2>`

}
function newGame(){
userInput.value = ""
userInput.setAttribute('disable', '')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
startOver.appendChild(p)
playGame = false
newGame()
}
function endGame(){
const newGamebutton = document.querySelector('#newGame')
newGamebutton.addEventListener('click', function(e){
prevGuess = []
numGuess = 1
guessSlot.innerHTML = ''
remaining.innerHTML = `${11 - numGuess}`
userInput.removeAttribute('disable')
startOver.removeChild(p)
    playGame = true
})
}