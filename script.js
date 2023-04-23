const toCrypt = ["a", "e", "i", "o", "u"];
const toDecrypt = ["ai", "enter", "imes", "ober", "ufat"];
const inputField = document.getElementById("input-text");
const outputField = document.getElementById("output-text");

let crypt = (text, reverse=false) => {
    const regex = new RegExp((reverse ? toDecrypt : toCrypt).join("|"), "gi");
    return text.replace(regex, match => {
        const index = (reverse ? toDecrypt : toCrypt).indexOf(match.toLowerCase());
        console.log(index);
        if (index !== -1) {
            return (reverse ? toCrypt : toDecrypt)[index];
        }
        console.log(match);
        return match;
    });
}

const cryptText = () => {
    let result = crypt(inputField.value);
    outputField.value = result;
}

const decryptText = () => {
    let result = crypt(inputField.value, true);
    outputField.value = result;
}

document.getElementById("crypt").addEventListener("click", cryptText);
document.getElementById("decrypt").addEventListener("click", decryptText);