let Highway = require('@dogstudio/highway');
let Fade = require('./assets/js/fade');

let H = new Highway.Core({
  transitions: {
    default: Fade,
    contextual: {
      slide: Fade
    },

  }
});

console.log(Highway);

// H.on('NAVIGATE_IN', ({ to, trigger, location }) => {
//   console.log('works')
// });


// let Typed = require('typed.js');

// new Typed('.element', {
//   strings: ["yes  sentence.", "onee sentence."],
//   typeSpeed: 30,
//   smartBackspace: true
// });

let button = document.querySelector('.btn');

button.addEventListener("click",function() {
  console.log('clicked');
});