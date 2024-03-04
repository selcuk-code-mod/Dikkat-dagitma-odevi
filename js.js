let counter = 0;

function here() {
  counter++;
  document.getElementById("counter").textContent = counter;
}

function toggleMusic() {
  let audio = document.getElementById("rainMusic");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function toggle2Music() {
  let audio = document.getElementById("forestMusic");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function toggle3Music() {
  let audio = document.getElementById("fireMusic");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
function toggle4Music() {
  let audio = document.getElementById("pianoMusic");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
let rainMusic = document.getElementById("rainMusic");

let forestMusic = document.getElementById("forestMusic");
let fireMusic = document.getElementById("fireMusic");
let pianoMusic = document.getElementById("pianoMusic");

rainMusic.addEventListener("play", function toggleMusic() {
  forestMusic.pause();
  fireMusic.pause();
  pianoMusic.pause();
});

forestMusic.addEventListener("play", function toggle2Music() {
  rainMusic.pause();
  fireMusic.pause();
  pianoMusic.pause();
});
fireMusic.addEventListener("play", function toggle3Music() {
  forestMusic.pause();
  rainMusic.pause();
  pianoMusic.pause();
});
pianoMusic.addEventListener("play", function toggle4Music() {
  forestMusic.pause();
  rainMusic.pause();
  fireMusic.pause();
});
