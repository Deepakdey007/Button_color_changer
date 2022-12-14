var all_buttons = document.getElementsByTagName('button')
console.log(all_buttons);  

var copyAllButtons = [];
for(let i=0; i<all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons); 

function buttonColorChange(buttonThingy) {
    // console.log(buttonThingy.value);
    if(buttonThingy.value === 'red') {
        buttonsRed();
    }
    else if(buttonThingy.value === 'green') {
        buttonsGreen();
    }
    else if(buttonThingy.value === 'reset') {
        buttonColorReset();
    }
    else if(buttonThingy.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for(let i=0;i<all_buttons.length;i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for(let i=0;i<all_buttons.length;i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for(let i=0;i<all_buttons.length;i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    var choices = ['btn-primary','btn-success','btn-danger','btn-warning'];

    for(let i=0; i<all_buttons.length; i++) {
        var randomNumber = Math.floor(Math.random()*4); // if we write this outside of the loop then it will give only one random generated number for this we write it inside the for loop
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}