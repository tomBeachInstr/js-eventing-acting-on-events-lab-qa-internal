var dodger = document.getElementById('dodger');
var game = document.getElementById('game');
dodger.style.backgroundColor = "red";

console.log("left:", dodger.style.left);
console.log("right:", dodger.style.right);
console.log("top:", dodger.style.top);
console.log("bottom:", dodger.style.bottom);

// dodger.style.bottom = '100px';
// dodger.style.right = '200px';

document.addEventListener('keydown', moveDodger);

function moveDodger(e) {
  console.log("== moveDodger ==");
  console.log("e.which:", e.which)
  if (e.which === 37) {
    moveDodgerLeft();
  } else if (e.which === 38) {
    moveDodgerUp();
  } else if (e.which === 39) {
    moveDodgerRight();
  }
}

function moveDodgerUp() {
  console.log("== moveDodgerUp ==");
  // removes "px" from left string so we can do math on actual number
  var bottomNumbers = dodger.style.bottom.replace('px', '')
  var bottom = parseInt(bottomNumbers);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom + 10}px`
  }
}

function moveDodgerRight() {
  console.log("== moveDodgerRight ==");
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers);

  if (left > 0) {
    dodger.style.left = `${left + 10}px`
  }
}

function moveDodgerLeft() {
  console.log("== moveDodgerLeft ==");
  // removes "px" from left string so we can do math on actual number
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers);

  if (left > 0) {
    dodger.style.left = `${left - 10}px`
  }
}

// NOTE: must click into browser window (not console)
// document.addEventListener('keydown', function(e) {
//   console.log("-- keydown --");
//   console.log("e.which:", e.which)
// })
