let dodger = document.getElementById("dodger");
let game = document.getElementById('game');

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
	// let leftNumbers = dodger.style.left.replace("px", "");
	let right = parseInt(dodger.style.left, 10);
	// console.log(game.clientWidth)
	// if ((right + dodger.clientWidth) < game.clientWidth) {
	if ((right + dodger.clientWidth) < 400) { // but game.clientWidth = 400....
			dodger.style.left = `${right + 1}px`;
	}
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});