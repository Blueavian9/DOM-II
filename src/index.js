import './less/index.less'

// Your code goes here!
console.log("Hello World!");
// eslint-disable-next-line no-unused-vars
const universalSelector = document.querySelector("*");

// 1 - load Event
    window.onload = function (evt) {
        console.log(`event ${evt.type} fired! Ready togo!`)
        const heading = document.querySelector('h1')
        heading.textContent = 'READY TO GO!!'
    }
    console.log(onload);

  // 2 - copy Event
    window.addEventListener('copy', () => {
        //universalSelector.clipboard.readText();
        console.log('pass');
        // eslint-disable-next-line no-undef
    })  

// 3 - click
    document.body.addEventListener('click', evt => {
      evt.target.classList.toggle('mirror')  
    })

// 4 - dblclick
    document.body.addEventListener('dblclick', evt => {
      evt.target.outerHTML = ''
    })

// 5 - keyword
    window.addEventListener('keydown', evt => {
      if (evt.key === 6) {
          document.body.innerHTML = 'LORD VADER EXECUTE ORDER 66'
      }
  })

// 6 - MouseOver
  document.body.addEventListener('mouseover', evt => {
      
  })

// 7 - Focus 

// 8 scroll

// 9 - select 

// 10 - drag / drop


