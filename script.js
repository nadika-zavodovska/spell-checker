import words from "./words.json" with { type: "json" };

// User dictionary permanently stores words added manually by user without duplicates
export let userDictionary = new Set();

const checkResultBlock = document.createElement("div");
checkResultBlock.id = "check-result-block";

let userTextInput;

// Temporary store words, which checkSpelling are flages as misspelled. Used only for checkSpelling function
let userMisspelledWords;

function setupSpellChecker() {
    userTextInput = document.getElementById("userText");
    const checkBtn = document.getElementById("checkBtn");
    const mainBlock = document.getElementById("main-block");

    mainBlock.appendChild(checkResultBlock);

    checkBtn.addEventListener("click", checkSpelling);
    // userTextInput.addEventListener("change", checkSpelling);
};

function checkSpelling() {
    // Function to remove details about previous check
    clearPreviousResults();

    // Get value (string) from the input and remove spaces before and after the text
    const userText = userTextInput.value.trim();

    // If after remove spaces userText is empty, alert and function exits
    if (!userText) {
        alert("You didn't type any text. Please, type your text.");
        return;
    }

    // Convert userText string to array. Split by spaces.
    const userWordsArray = userText.split(/\s+/);

    userMisspelledWords = new Set();

    userWordsArray.forEach((word) => {

        // Check if the first letter is capitalised
        if (/^[A-Z]/.test(word)) {
            return;
        } else if (word.includes("-")) {

            const wordPartsArray = word.split("-"); rdsDescription = document.createElement("div");
            misspelledWordsDescription.classList.ad

            wordPartsArray.forEach(oneWord => {
                // Remove symbols from each word part, check if it's misspelled
                const oneWordWithoutSymbols = removeSymbolsFromWord(oneWord);
                if (!words.includes(oneWordWithoutSymbols) && !userDictionary.has(oneWordWithoutSymbols) && oneWord !== "") {
                    userMisspelledWords.add(oneWordWithoutSymbols);
                }
            })
        } else {
            // For regular words, remove symbols, check if it's misspelled
            const wordWithoutSymbols = removeSymbolsFromWord(word);
            if (!words.includes(wordWithoutSymbols) && !userDictionary.has(wordWithoutSymbols)) {
                userMisspelledWords.add(wordWithoutSymbols);
            }
        }
    });
    // If there are misspelled words, display them
    if (userMisspelledWords.size > 0) {
        displayCheckResultBlock([...userMisspelledWords]);
    } else {
        checkResultBlock.classList.remove("misspelled-block-add-border");
    }
}

function clearPreviousResults() {
    checkResultBlock.textContent = "";
}

export function removeSymbolsFromWord(word) {
    return word.replace(/^[,.?!":;]+|[,.?!":;]+$/g, "").toLowerCase();
}

export function addToUserDictionary(word) {
    userDictionary.add(word);
    checkSpelling();
}

// display the misspelled words, add them to the dictionary
function displayCheckResultBlock(words) {
    checkResultBlock.classList.add("misspelled-block-add-border");
    const misspelledWordsMessage = document.createElement("h2");
    misspelledWordsMessage.innerText = words.length === 1 ? "Misspelled word found:" : "Misspelled words found:";
    checkResultBlock.appendChild(misspelledWordsMessage);

    const misspelledWordsDescription = document.createElement("div");
    misspelledWordsDescription.classList.add("misspelled-block-description");
    misspelledWordsDescription.innerHTML = words.length === 1
        ? "If you think this word is correct, you can add it to your personal dictionary."
        : "If you think these words are correct, you can add them to your personal dictionary.";
    checkResultBlock.appendChild(misspelledWordsDescription);

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
        addBtn.classList.add("add-btn");
        addBtn.addEventListener("click", () => addToUserDictionary(word));
        addMisspelledWordBlock.appendChild(addBtn);
    });
}

window.onload = function () {
    setupSpellChecker();
};

