let click = "click";
let hover = "hover";
let steady = "steady";
let fast = "fast";
let unlock = "unlock";
let spy = "background";
let score = "score";
let wipe = "wipe";
let victory = "victory";
let agent = "agent";


function loadSound () {
  createjs.Sound.registerSound("assets/audio/click.mp3", click);
  createjs.Sound.registerSound("assets/audio/hover.mp3", hover);
  createjs.Sound.registerSound("assets/audio/chest_steady.mp3", steady);
  createjs.Sound.registerSound("assets/audio/chest_fast.mp3", fast);
  createjs.Sound.registerSound("assets/audio/reveal2.mp3", unlock);
  createjs.Sound.registerSound("assets/audio/undercover.mp3", spy);
  createjs.Sound.registerSound("assets/audio/spyagent2.mp3", agent);
  createjs.Sound.registerSound("assets/audio/score2.mp3", score);
  createjs.Sound.registerSound("assets/audio/wipe.mp3", wipe);
  createjs.Sound.registerSound("assets/audio/victory.mp3", victory);
}


function ClickSound() {
  createjs.Sound.play(click);
}

function HoverSound() {
  createjs.Sound.play(hover);
}

function AchievementSound() {
  let achievement = createjs.Sound.play(unlock);
  achievement.volume = 0.5;
}

function ScoreSound() {
  let scoreSound = createjs.Sound.play(score);
  scoreSound.volume = 0.2;
}

function  WipeSound() {
  let wipeSound = createjs.Sound.play(wipe);
  wipeSound.volume = 0.1;
}

function  VictorySound() {
  let victorySound =  createjs.Sound.play(victory);
  victorySound.volume = 0.3;
}

function backgroundMusic() {
  let background = createjs.Sound.play(spy);
  background.loop = -1;
  background.volume = 0.1;
}

function backgroundMusicOne() {
  let background = createjs.Sound.play(agent);
  background.loop = -1;
  background.volume = 0.2;
}

function muteMusic() {
  createjs.Sound.stop(spy);
  createjs.Sound.stop(agent);
}



function handleClick(myRadio) {
  let hints = myRadio.value;
  let text = document.querySelectorAll('.paper .text span');
  if(hints =="true"){
    for(let i = 0; i< text.length; i++) {
      text[i].classList.add('hint');
    }
  } else{
    for(let i = 0; i< text.length; i++) {
      text[i].classList.remove('hint');
    }
  }
  console.log(hints)
}


