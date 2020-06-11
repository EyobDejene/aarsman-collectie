

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
// var mprox = new mouseProximity(document.getElementsByClassName('cameras'),
//     {
//   clear: false,
//   origin: 'center',
//   showAttribute: false,
//    //callback can be set here too
// });


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
// mprox.run(doSomething);

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




let area = document.querySelectorAll('.area');
for(var i = 0; i<area.length; i++) {
  console.log(area[i]);
  area[i].addEventListener("click",function(e) {
    let areaReveal = this.classList[0];
    reveal(areaReveal);
  });
}



function reveal(state){
  console.log(state);
  let reveal = document.querySelector('.reveal');
  let overlay = document.querySelector('.overlayBlack');
  let reveal_text = document.querySelector('.text p');
  let reveal_image = document.querySelector('.img img');

  if(state === 'cameras'){
    reveal_text.innerHTML = 'Bewakingscamera’s';
    reveal_image.src= 'assets/images/camera.jpg';
  }

  if(state === 'bokaal'){
    reveal_text.innerHTML = "Beker";
    reveal_image.src= 'assets/images/bokaal.jpg';
  }

  if(state === 'brandkast'){
    reveal_text.innerHTML = "Brandblusser";
    reveal_image.src= 'assets/images/brandkast.jpg';
  }

  if(state === 'bloed'){
    reveal_text.innerHTML = "Schrammetje op zijn voorhoofd";
    reveal_image.src= 'assets/images/bloed.jpg';
  }

  if(state === 'vlag'){
    reveal_text.innerHTML = "Rode vlaggetje";
    reveal_image.src= 'assets/images/vlag.jpg';
  }

  if(state === 'lampjes'){
    reveal_text.innerHTML = "Rode redlampjes";
    reveal_image.src= 'assets/images/lampjes.jpg';
  }

  if(state === 'borst'){
    reveal_text.innerHTML = "Label met je bloedgroep";
    reveal_image.src= 'assets/images/borst.jpg';
  }

  if(state === 'militair'){
    reveal_text.innerHTML = "Militant";
    reveal_image.src= 'assets/images/militair.jpg';
  }

  showCircle(state);
  overlay.classList.add('overlayActive');
  reveal.classList.remove('not-visible');
  AchievementSound();
  setTimeout(function() {
    reveal.classList.add('fly');
  },2000);
  setTimeout(function() {
    closeReveal();
  },3000)
  // setTimeout(function() {
  //   closeReveal();
  // },5000);
}


function showCircle(state){
    let SelectedAreas = document.querySelectorAll('.'+state);
    for(var i = 0; i< SelectedAreas.length; i++) {
      SelectedAreas[i].classList.remove('not-visible');
      SelectedAreas[i].classList.add('disabled');
      // console.log(SelectedAreas[i])
      clueFound(SelectedAreas[i]);
    }

}


function closeReveal(){
  if (document.querySelector('.overlayBlack').classList.contains('overlayActive')){
    // do some stuff
    let reveal = document.querySelector('.reveal');
    let overlay = document.querySelector('.overlayBlack');
      reveal.classList.add('not-visible');
      overlay.classList.remove('overlayActive');
      reveal.classList.remove('fly');
  }
}



// play when page is loaded
window.addEventListener("load", callback);
function callback(){
  setTimeout(function() {
    console.log('loaded');
   // backgroundMusic();
  },1000);

}


checkClues();
function checkClues() {
  let clues = document.querySelectorAll('.clue');
  let countClues = clues.length;
  let need = document.querySelector('.need');
  let found = document.querySelector('.found');
  need.innerHTML = countClues;
  found.innerHTML = 0;

}

function clueFound(clue) {
  let found = clue.classList.contains('clue');
  if(found){
    setScore();
  }
}

function setScore(){
  let found = document.querySelector('.found');
  let clues = document.querySelectorAll('.clue');
  let countClues = clues.length;
  let value  = Number(found.innerHTML);
  let valueCheck = value+1;
    value++;
    found.innerHTML = value;
  if(valueCheck < countClues) {
      ScoreSound();
  }else {
    ScoreSound();
    WipeSound();
    VictorySound();
    console.log('found all');
  }


}

// start game
let startButton = document.querySelector('.start');
startButton.addEventListener('click',startGame);
function  startGame() {
  let overlayBlack = document.querySelector('.overlayBlack');
  let container = document.querySelector('.container');
  container.classList.add('not-visible');
  overlayBlack.classList.remove('overlayActive');
  let paper = document.querySelector('.paper');
  paper.classList.remove('closed')
}



// controlls audio
let audio = document.querySelector('.bars-wrap');
audio.addEventListener('click',stopAudio);
function stopAudio() {
  let state = audio.classList;
  let soundwave = document.querySelector('#bars');
  if(state.contains('muted')){
    backgroundMusic();
    state.remove('muted');
    soundwave.classList.remove('pause');
  }else{
    muteMusic();
    state.add('muted');
    soundwave.classList.add('pause');
  }
}


let textopener = document.querySelector('.textopener');
let paper = document.querySelector('.paper');
let wrap = document.querySelector('.wrap');
textopener.addEventListener('click',function() {
  paper.classList.toggle('closed');
  //wrap.classList.toggle('slide');

});