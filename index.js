var dodger = document.getElementById('dodger');
console.log("dodger:", dodger);
dodger.style.backgroundColor = "red";

console.log("left:", dodger.style.left);
console.log("bottom:", dodger.style.bottom);

dodger.style.bottom = '100px';

console.log("left:", dodger.style.left);
console.log("bottom:", dodger.style.bottom);

document.addEventListener('keydown', function(e) {
  console.log("-- keydown --");
  console.log("e.which:", e.which)
})
