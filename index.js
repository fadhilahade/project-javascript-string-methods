let editNewText = prompt('input the text you want to rotate')
let newText = ' '
let fixedText = ''
let regex = /a-zA-Z/gi

function rotate(editNewText) {
    for (let i = 0; i < editNewText.length; i++) {
        newText += String.fromCharCode(editNewText.charCodeAt(i) + 13);
    }
    alert(`your name with rot13 is ${newText}`);
}
rotate(editNewText)