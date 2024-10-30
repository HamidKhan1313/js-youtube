````java script

const form = document.querySelector('form')
//this use case will give you empty value
//const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e){
e.preventDefault()

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height === "" || height < 0 ||isNaN(height)){
  results.innerHTML = `plese give us a valid height ${height}`
}else if(weight === "" || weight < 0 ||isNaN(weight)){
  results.innerHTML = `plese give us a valid height ${weight}`
}
else {
  const bmi = (weight /  (height * height / 1000)).toFixed(2)
  // show result
  results.innerHTML = `<span>${bmi}</span>`
}

})
````