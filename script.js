const toCrypt = ["a", "e", "i", "o", "u"];
const toDecrypt = ["ai", "enter", "imes", "ober", "ufat"];

let crypt = (text) => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        if (toCrypt.includes(letter)) {
            newText += toDecrypt[toCrypt.indexOf(letter)];
        } else {
            newText += letter;
        }
    }
    return newText;
}

const cryptText = () => {
    let text = document.getElementById("input-text").value;
    let result = crypt(text);
    document.getElementById("output-text").value = result;
}

const decryptText = () => {
    let text = document.getElementById("input-text".value);
    let result = "";
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) - 1);
    }
    document.getElementById("output-text").value = result;
}

document.getElementById("crypt").addEventListener("click", cryptText);
document.getElementById("decrypt").addEventListener("click", decryptText);