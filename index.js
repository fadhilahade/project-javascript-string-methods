let editNewText = prompt("input the text you want to rotate");
let newText = " ";
let fixedText = " ";

function rotate(newTextParameter) {
    for (let i = 0; i < newTextParameter.length; i++) {

        fixedText +=
            newTextParameter.charCodeAt(i) >= 110 &&
            newTextParameter.charCodeAt(i) <= 122 ||
            newTextParameter.charCodeAt(i) >= 78 &&
            newTextParameter.charCodeAt(i) <= 90 ?
            newTextParameter.charCodeAt(i) - 13 + " " :
            newTextParameter.charCodeAt(i) + 13 + " ";
    }
    console.log(fixedText)
    fixedText.split(" ").forEach(item => {
        newText += String.fromCharCode(item);
    })
    alert(`your name with rot13 is ${newText}`)
}
rotate(editNewText);