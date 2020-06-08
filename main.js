

// let Typed = require('typed.js');

// new Typed('.element', {
//   strings: ["yes  sentence.", "onee sentence."],
//   typeSpeed: 30,
//   smartBackspace: true
// });

// let button = document.querySelector('.btn');
// let overlay = document.querySelector('.overlay');
//
// button.addEventListener("click",function() {
//   overlay.classList.toggle('active');
// });

//initialize options here
var mprox = new mouseProximity(document.getElementsByClassName('cameras'),
    {
  clear: false,
  origin: 'center',
  showAttribute: false,
   //callback can be set here too
});


let playing_slow = false;
let playing_fast = false;
//callback
var doSomething = function(el,distance){
  // console.log(distance);
  //do something with the element (el)
  //dow something with the distance (distance)
  // console.log(distance);
  // function getColor(value){
  //   //value from 0 to 1
  //   let percentage = Math.round(100/value*10);
  //
  //   var hue=((value)/10).toString(10);
  //   // console.log(hue);
  //   if(hue < 30) {
  //
  //     return ["hsl(", hue, ",100%,50%)"].join("");
  //   }
  //   if(hue > 6){
  //     hue = 190;
  //     return ["hsl(", hue, ",100%,50%)"].join("");
  //   }
  // }
  //
  // document.querySelector('.cursor-dot-outline').style.backgroundColor=getColor(distance);
  // console.log(distance);
  // if(distance < 100){
  //   if (!playing_fast)
  //   {
  //     Chest("fast");
  //     playing_fast = true;
  //     playing_slow = false;
  //   }
  // }else {
  //   if (!playing_slow)
  //   {
  //     Chest("steady");
  //     playing_slow = true;
  //     playing_fast = false;
  //   }
  // }


}

//run the proximity tracker
mprox.run(doSomething);

// //stop the proximity tracker
// mprox.stop();





// just grab a DOM element
var element = document.querySelector('.object-subject');

// And pass it to panzoom
panzoom(element, {
  zoomSpeed: 0.065, // 6.5% per mouse wheel event
  maxZoom: 2,
  minZoom: 1,
  bounds: true,
  boundsPadding: 1
}).smoothZoomAbs(
    300, // initial x position
    500, // initial y position
    0.1  // initial zoom
);




let cameras = document.querySelectorAll('.cameras');
let bokaal = document.querySelectorAll('.bokaal');


for(var i = 0; i<bokaal.length; i++) {
  bokaal[i].addEventListener("click",function() {
    if (bokaal)
    {
      for (var i = 0; i < bokaal.length; i++) {
        bokaal[i].classList.remove('not-visible');
      }
      reveal();
  }
  });
}



for(var i = 0; i<cameras.length; i++) {
  cameras[i].addEventListener("click",showCircle);
}
function showCircle(e){
  let cameras = this.classList.contains('cameras');
  if(cameras)
  {
    let camera = document.querySelectorAll('.cameras');

    for(var i = 0; i<camera.length; i++) {
      camera[i].classList.remove('not-visible');
      console.log(camera[i])
    }
    reveal('camera');
  }

  //e.classList.toggle('not-visible');
}



function reveal(state){
  let reveal = document.querySelector('.reveal');
  let overlay = document.querySelector('.overlayBlack');
  let reveal_text = document.querySelector('.text p');
  if(state === 'camera'){
    reveal_text.innerHTML = '' +
        'Die halve bolletjes van glas tegen het plafond' +
        ' boven de stralende stellen in zwart-wit, zijn dat bewakingscamera’s?' +
        ' Lekker werken zo.';
  }else{
    reveal_text.innerHTML = "Binnen treft hij diverse oorkonden en trofeeën aan. ";
  }
  overlay.classList.add('overlayActive');
  console.log(reveal);
  AchievementSound();
  reveal.classList.remove('not-visible');
  setTimeout(function() {

  },5000);
}



document.querySelector('.reveal').addEventListener('click',closeReveal);

function closeReveal(){
  if (document.querySelector('.overlayBlack').classList.contains('overlayActive')){
    // do some stuff
    let reveal = document.querySelector('.reveal');
    let overlay = document.querySelector('.overlayBlack');

    reveal.classList.add('not-visible');
    overlay.classList.remove('overlayActive');
  }
}


window.addEventListener("load", callback);
function callback(){
  setTimeout(function() {
    console.log('loaded');
    backgroundMusic();
  },1000);

}

