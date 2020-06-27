//Choose a random color

const button = document.getElementsByClassName('btn btn-outline-secondary')

function changeColor() {
    document.body.style.backgroundColor = 'dodgerBlue';
}

button[0].addEventListener('click', changeColor)