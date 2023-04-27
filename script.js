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

// DARK/LIGHT MODE
const toggleDarkMode = document.getElementById("toggle-dark-mode");
const toggleIcon = document.getElementById("toggle-icon");
const mainButtons = document.querySelectorAll(".btn-glitch");

function setDarkMode() {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkMode.checked = true;
    toggleIcon.className = "fa-solid fa-sun"
    for (let i = 0; i < mainButtons.length; i++) {
        mainButtons[i].style.background = "none";
    }
    copyButton.classList.remove("copy-button-light");
}

function setLightMode() {
    document.documentElement.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkMode.checked = false;
    toggleIcon.className = "fa-regular fa-moon"
    for (let i = 0; i < mainButtons.length; i++) {
        mainButtons[i].style.background = "#212529";
        mainButtons[i].style.color = "white";
        mainButtons[i].classList.toggle("btn-glitch-light");
    }
    copyButton.classList.toggle("copy-button-light");
    console.log(copyButton.classList);
}

toggleDarkMode.addEventListener("change", () => {
    if (toggleDarkMode.checked) {
        setDarkMode();
    } else {
        setLightMode();
    }
});

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    setDarkMode();
} else {
    setLightMode();
}