//Choose a random color

const button = document.getElementsByClassName('btn btn-outline-secondary')

function changeColor() {
    document.body.style.backgroundColor = random_bg_color();
}
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

button[0].addEventListener('click', changeColor)