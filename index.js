// Adding drum sounds to buttons
var allButtons = document.querySelectorAll(".set .drum");

for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function() {
    // this.style.color = "#fff";
    makeDrumSound(this.innerText);
    makeAnimation(this.innerText);
  });
}

// Adding keydown listener to document
document.addEventListener("keydown", function(event) {
  makeDrumSound(event.key);
  makeAnimation(event.key);
});


// Making Drum Sounds
function makeDrumSound(key) {

  var keySoundFile = "sounds/";
  switch (key) {
    case "w":
      keySoundFile += "tom-1.mp3";
      break;

    case "a":
      keySoundFile += "tom-2.mp3";
      break;

    case "s":
      keySoundFile += "tom-3.mp3";
      break;

    case "d":
      keySoundFile += "tom-4.mp3";
      break;

    case "j":
      keySoundFile += "snare.mp3";
      break;

    case "k":
      keySoundFile += "crash.mp3";
      break;

    case "l":
      keySoundFile += "kick-bass.mp3";
      break;

  }
  var keySound = new Audio(keySoundFile);
  keySound.play();
}

function makeAnimation(key) {
  var buttonPressed = document.querySelector("." + key);
  buttonPressed.classList.add("pressed");
  setTimeout(function () {
    buttonPressed.classList.remove("pressed");
  }, 100);
}
