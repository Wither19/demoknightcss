window.addEventListener("resize", resized);

function resized() {
  document.getElementById('w').innerHTML = window.innerWidth;
  document.getElementById('h').innerHTML = window.innerHeight;
}
function copyStyles() {
            navigator.clipboard.writeText('&ltlink rel="stylesheet" href="https://wither19.github.io/demoknightcss/style.css"&gt');
        }
function copyScripts() {
            navigator.clipboard.writeText('&ltscript src="https://wither19.github.io/demoknightcss/style.css"&gt&lt/script&gt');
        }
document.getElementById('btn-css').addEventListener("click", copyStyles);
document.getElementById('btn-js').addEventListener("click", copyScripts);
