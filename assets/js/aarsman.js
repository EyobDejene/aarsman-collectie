let click = "click";
let hover = "hover";
let steady = "steady";
let fast = "fast";
let unlock = "unlock";
let spy = "background";


function loadSound () {
  createjs.Sound.registerSound("assets/audio/click.mp3", click);
  createjs.Sound.registerSound("assets/audio/hover.mp3", hover);
  createjs.Sound.registerSound("assets/audio/chest_steady.mp3", steady);
  createjs.Sound.registerSound("assets/audio/chest_fast.mp3", fast);
  createjs.Sound.registerSound("assets/audio/reveal.mp3", unlock);
  createjs.Sound.registerSound("assets/audio/search.mp3", spy);
}


function ClickSound() {
  createjs.Sound.play(click);
}

function HoverSound() {
  createjs.Sound.play(hover);
}

function AchievementSound() {
  createjs.Sound.play(unlock);
}


function backgroundMusic() {
  let background = createjs.Sound.play(spy);
  background.loop = -1;
  background.volume = 0.5;
}




function Chest(state) {

    // let beat = createjs.Sound.play(state);
    // beat.volume = 0.5 ;
    // beat.loop = -1;
    //
    // console.log(beat);
}


