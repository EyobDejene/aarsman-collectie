var soundID = "Thunder";

function loadSound () {
  createjs.Sound.registerSound("assets/audio/donnerre2.mp3", soundID);
}

function playSound () {
  createjs.Sound.play(soundID);
}

