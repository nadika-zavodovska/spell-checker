import words from "./words.json" with { type: "json" };

// User dictionary, which store words added by user without duplicates
export let userDictionary = new Set();

let checkResultBlock = document.createElement("div");
checkResultBlock.id = "check-result-block";
let userTextInput;

window.onload = function () {
    userTextInput = document.getElementById("userText");
    const checkBtn = document.getElementById("checkBtn");
    const mainBlock = document.getElementById("main-block");

    mainBlock.appendChild(checkResultBlock);

    checkBtn.addEventListener("click", checkSpelling);
};

function checkSpelling() {
    // Remove details about previous text
    checkResultBlock.innerHTML = "";

    // Get value (string) from the input and remove spaces before and after the text
    const userText = userTextInput.value.trim();
    // If after remove spaces userText is empty, alert and function exits
    if (!userText) {
        alert("You didn't type any text. Please, type your text.");
        return;
    }

    // Convert userText string to array. Split by spaces.
    const userWordsArray = userText.split(/\s+/);
    let userMisspelledWords = new Set();

    userWordsArray.forEach((word) => {
        if (word.match(/^[A-Z]/)) {
            return;
        }
        if (word.includes("-")) {
            const wordPartsArray = word.split("-");
            if (wordPartsArray.some(wordPart => !words.includes(wordPart) && !userDictionary.has(wordPart))) {
                userMisspelledWords.add(word);

            }
        } else {
            const wordWithoutSymbols = removeSymbolsFromWord(word);
            if (!words.includes(wordWithoutSymbols) && !userDictionary.has(wordWithoutSymbols)) {
                userMisspelledWords.add(wordWithoutSymbols);
            }
        }
    });
    if (userMisspelledWords.size > 0) {
        displayCheckResultBlock([...userMisspelledWords]);
    }
}

export function removeSymbolsFromWord(word) {
    return word.replace(/^[.,?!'":;]+|[.,?!":;]+$/g, "").toLowerCase();
}

export function addToUserDictionary(word) {
    userDictionary.add(removeSymbolsFromWord(word));
    checkSpelling();
}

function displayCheckResultBlock(words) {
    const misspelledWordsMessage = document.createElement("h2");
    misspelledWordsMessage.innerText = "Misspelled words:";
    misspelledWordsMessage.classList.add("misspelled-message-title");
    checkResultBlock.appendChild(misspelledWordsMessage);

    words.forEach(word => {
        const addMisspelledWordBlock = document.createElement("div");
        addMisspelledWordBlock.classList.add("misspelled-word-btn-block");
        checkResultBlock.appendChild(addMisspelledWordBlock);

        const misspelledWordEl = document.createElement("span");
        misspelledWordEl.innerText = word;
        misspelledWordEl.classList.add("misspelled-word");
        addMisspelledWordBlock.appendChild(misspelledWordEl);

        const addBtn = document.createElement("button");
        addBtn.innerText = `Add word`;
        addBtn.addEventListener("click", () => addToUserDictionary(word));
        addMisspelledWordBlock.appendChild(addBtn);
    });
}