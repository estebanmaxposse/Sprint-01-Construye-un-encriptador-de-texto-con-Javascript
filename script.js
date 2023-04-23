//ENCRYPT TEXT

const toEncrypt = ["a", "e", "i", "o", "u"];
const toDecrypt = ["ai", "enter", "imes", "ober", "ufat"];
const inputField = document.getElementById("input-text");
const outputField = document.getElementById("output-text");

let encrypt = (text, reverse = false) => {
    const regex = new RegExp((reverse ? toDecrypt : toEncrypt).join("|"), "gi");
    return text.replace(regex, match => {
        const index = (reverse ? toDecrypt : toEncrypt).indexOf(match.toLowerCase());
        if (index !== -1) {
            return (reverse ? toEncrypt : toDecrypt)[index];
        }
        return match;
    });
}

const encryptText = () => {
    let result = encrypt(inputField.value);
    outputField.value = result;
}

const decryptText = () => {
    let result = encrypt(inputField.value, true);
    outputField.value = result;
}

document.getElementById("crypt").addEventListener("click", encryptText);
document.getElementById("decrypt").addEventListener("click", decryptText);

// COPY TO CLIPBOARD
const copyButton = document.getElementById("copy-button");

const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))
const toastLiveExample = document.getElementById('liveToast')

copyButton.addEventListener("click", () => {
    outputField.select();
    outputField.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(outputField.value);
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
});