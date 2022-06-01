import './less/index.less'

// Your code goes here!
console.log('Hello World!');

  // 1- Load Event
window.onload = function (evt) {
  console.log(`event ${evt.type} fired! ready to go!`)
  const heading = document.querySelector('h1')
  heading.textContent = 'READY TO GO!!'

  // 2- copy Event
  window.addEventListener('copy', () => {
    navigator.clipboard.readText()
      .then(text => {
        heading.textContent += text
      })
  })

  // 3- click
  document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')     
  }) 
}
// assigning a variable to the nav-link

// mouse over = blue)

// mouse out = black

// KEYDOWN

// WHEEL

// LOAD


//console.log(document.querySelector(".btn"));

// create a input element

// focus the input element


// select a <input>


//drag img
