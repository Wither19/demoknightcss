window.addEventListener("resize", resized);

function resized() {
  document.getElementById('w').innerHTML = window.innerWidth;
  document.getElementById('h').innerHTML = window.innerHeight;
}
function copyStyles() {
            navigator.clipboard.writeText(&ltlink rel="stylesheet" href="https://wither19.github.io/demoknightcss/style.css"&gt);
        }
function copyScripts() {
            navigator.clipboard.writeText(&ltscript src="https://wither19.github.io/demoknightcss/style.css"&gt&lt/script&gt);
        }
document.getElementById('copy-css').addEventListener("click", copyStyles);
document.getElementById('copy-js').addEventListener("click", copyScripts);
const toastTriggerStyles = document.getElementById('liveToastBtnCss')
const toastStyles = document.getElementById('liveToastCss')
const toastTriggerScripts = document.getElementById('liveToastBtnJs')
const toastScripts = document.getElementById('liveToastJs')

if (toastTriggerStyles) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTriggerStyles.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

if (toastTriggerScripts) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTriggerScripts.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
