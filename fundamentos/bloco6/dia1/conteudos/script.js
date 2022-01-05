// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', nadaContece);

function nadaContece (event) {
    event.preventDefault()
}

INPUT_CHECKBOX.addEventListener('click', nadaRola);

function nadaRola (event) {
    event.preventDefault()
}

INPUT_TEXT.addEventListener('keypress', soA);

function soA (event) {
    let val = event.charCode;
    if (val != 097) {
        event.preventDefault();
        console.log('uepa')
    }
}