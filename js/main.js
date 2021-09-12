const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector(".visual");
const colors = [
  "#60d394",
  "#d36060",
  "#c060d3",
  "#d3d160",
  "#606bd3",
  "#60c2d3",
];

// for (let i = 0; i < pads.length; i++) {
//   pads[i].onclick = function () {
//     sounds[i].currentTime = 0;
//     sounds[i].play();
//     createBubble(i);
//   };
// }

// function createBubble(index) {
//   //Create bubbles
//   const bubble = document.createElement("div");
//   visual.appendChild(bubble);
//   bubble.style.backgroundColor = colors[index];
//   bubble.style.animation = `jump 1s ease`;
//   bubble.addEventListener("animationend", function () {
//     visual.removeChild(this); // this for bubble
//   });
// }

for (let i = 0; i < pads.length; i++) {
  pads[i].onclick = function () {
    sounds[i].currentTime = 0;
    sounds[i].play();
    createBubble(i);
  };
}

function createBubble(index) {
  let bubble = document.createElement("div");
  visual.appendChild(bubble);
  bubble.style.backgroundColor = colors[index];
  bubble.style.animation = "jump 1s ease";
  bubble.onanimationend = function () {
    visual.removeChild(this);
  };
}
