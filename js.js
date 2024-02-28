let counter = 0;

function here() {
  counter++;
  document.getElementById("counter").textContent = counter;
}

let audio = document.getElementById("rainMusic");
function toggleMusic() {
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
