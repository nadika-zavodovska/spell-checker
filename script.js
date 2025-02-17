import words from "./words.json" with { type: "json" };

// User dictionary, which store words added by user without duplicates
let userDictionary = new Set();

window.onload = function () {
    const userText = document.getElementById("userText"); 
    const checkBtn = document.getElementById("checkBtn"); 
    const mainBlock = document.getElementById("main-block");

    const checkResultBlock = document.createElement("div");
    checkResultBlock.id = "check-result-block";
    mainBlock.appendChild(checkResultBlock);
}