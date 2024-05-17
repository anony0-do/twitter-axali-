let buttons = document.querySelectorAll('.butt');

buttons.forEach(function(button) {
    button.style.backgroundColor = 'darkblue';
    button.addEventListener('mouseout', mouseOut);
});

function id1() {
    buttons.forEach(function(button) {
        button.style.backgroundColor = 'red';
    });
}

function mouseOut() {
    this.style.backgroundColor = 'darkblue'; 
}
