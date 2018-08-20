var dodger = document.getElementById('dodger');
console.log("dodger:", dodger);
dodger.style.backgroundColor = "red";

console.log("left:", dodger.style.left);
console.log("bottom:", dodger.style.bottom);

dodger.style.bottom = '100px';

console.log("left:", dodger.style.left);
console.log("bottom:", dodger.style.bottom);

document.addEventListener('keydown', moveDodger);

function moveDodger(e) {
  console.log("== moveDodger ==");
  console.log("e.which:", e.which)
  let whichKey = e.which;

  // switch(whichKey) {
  //     case x:
  //         code block
  //         break;
  //     case y:
  //         code block
  //         break;
  //     default:
  //         code block
  // }});
}

function moveDodgerRight() {
  console.log("== moveDodgerRight ==");
  // removes "px" from left string so we can do math on actual number
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers);

  // prevents leaving black box
  if (left > 0) {
    dodger.style.left = `${left - 10}px`
  }
}

function moveDodgerLeft() {
  console.log("== moveDodgerLeft ==");
  // removes "px" from left string so we can do math on actual number
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers);

  // prevents leaving black box
  if (left > 0) {
    dodger.style.left = `${left - 10}px`
  }
}

// NOTE: must click into browser window (not console)
// document.addEventListener('keydown', function(e) {
//   console.log("-- keydown --");
//   console.log("e.which:", e.which)
// })
