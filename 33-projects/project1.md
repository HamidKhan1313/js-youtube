# project related to Dom

## project Link
[CLick here ] (https://stackbLitz.
com/edit/dom-project-chaiaurcode?
file=index.html)

# solution code

## project 1

```` 
const body = document.querySelector('body')
const button = document.querySelectorAll(".button")
button.forEach(function(button){
console.log(button)
button.addEventListener('click', function(e){
console.log(e)
console.log(e.target)
if(e.target.id === "grey"){
body.style.backgroundColor = e.target.id
}
if(e.target.id === "white"){
  body.style.backgroundColor = e.target.id
  }
  if(e.target.id === "blue"){
    body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id
      }
      if(e.target.id === "purple"){
        body.style.backgroundColor = e.target.id
        }
})
})

````