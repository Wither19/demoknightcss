window.addEventListener("load", resized);
window.addEventListener("resize", resized);

function resized() {
  document.getElementsByClassName('width').innerHTML = window.innerWidth;
  document.getElementsByClassName('height').innerHTML = window.innerHeight;
}
