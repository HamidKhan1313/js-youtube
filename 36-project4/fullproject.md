````javascript
let randomNumber = (parseInt (Math.random() *100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');;

let prevGuess = [];
let numGuess = 1;

let playGame = true;

function validateGuess(guess){
if (isNaN(guess)){
alert('plese enter a valid number')
}
else if(guess < 1){
  alert('plese enter a  number more than one')
}
else if(guess > 100){
  alert('plese enter a  number less than 100')
}
else {
  prevGuess.push(guess)
  if(numGuess === 11){
displayGuess(guess)
displayMessage(`Game Over. Random number was ${randomNumber}`)
endGame()
  }
  else{
    displayMessage(guess)
    checkGuess(guess)
  }
}
}

function checkGuess(guess){
if(guess === randomNumber){
displayMessage('you guess it right')
endGame()
}
else if (guess < randomNumber){
  displayMessage('Number is too low')
}
else if (guess > randomNumber){
  displayMessage('Number is too High')
}
}

function displayGuess(guess){
userInput.value = ""
guessSlot.innerHTML += `${guess}`
numGuess++
remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ""
  userInput.setAttribute('disable', '')
  p.classList.add('button')
p.innerHTML = `<h2 id ='newGame'>Start New Game </h2>`
startOver.appendChild(p)
playGame = false
newGame()
}
function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click', function(e){

  randomNumber  = parseInt(Math.random() *100 + 1)
  playGame = true
  prevGuess = []
  numGuess = 1
  guessSlot.innerHTML = ''
  remaining.innerHTML = `${11 - numGuess}`
userInput.removeAttribute('disable')
startOver.removeChild(p)
  playGame = true
})
}


````