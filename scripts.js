window.addEventListener("load", resized);
window.addEventListener("resize", resized);

function resized() {
  document.getElementById('w').innerHTML = window.innerWidth;
  document.getElementById('h').innerHTML = window.innerHeight;
}
