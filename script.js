import words from "./words.json" with { type: "json" };

// User dictionary, which store words added by user without duplicates
let userDictionary = new Set();

window.onload = function () {
    const userText = document.getElementById("userText");
    console.log(userText);
    const checkBtn = document.getElementById("checkBtn");
    console.log(checkBtn);
}