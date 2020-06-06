let click = "click";
let hover = "hover";

function loadSound () {
  createjs.Sound.registerSound("assets/audio/click.mp3", click);
  createjs.Sound.registerSound("assets/audio/hover.mp3", hover);
}


function ClickSound () {
  createjs.Sound.play(click);
}

function HoverSound () {
  createjs.Sound.play(hover);
}

