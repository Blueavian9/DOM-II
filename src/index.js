import './less/index.less'

// Your code goes here!
console.log("Hello World!");
const universalSelector = document.querySelector("*");

// 1 - load Event
    window.onload = function (evt) {
        console.log(`event ${evt.type} fired! Ready togo!`)
        const heading = document.querySelector('h1')
        heading.textContent = 'READY TO GO!!'
    }

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
