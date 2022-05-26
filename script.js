const selection = document.querySelectorAll('.options');
const form = document.querySelector('.questions');
let selectionPill = document.querySelector('.selection-pill p');
wrapperOne = document.querySelector('.wrapper');
wrapperTwo = document.querySelector('.wrapper-two');
let buttonNum = 0;

console.log(selection);

form.addEventListener('submit', function (e) {

    e.preventDefault();
    console.log(e.target);
    console.log("You have selected " + buttonNum);
    selectionPill.innerHTML = "You selected " + buttonNum + " out of 5";
    wrapperOne.style.display = 'none';
    wrapperTwo.style.display = 'block';


})


for (button of selection) {
    button.addEventListener('click', function (e) {

        e.preventDefault();
        console.log(e.target);
        buttonNum = e.target.innerHTML;


    })
}


