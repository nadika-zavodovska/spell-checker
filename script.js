import words from "./words.json" with { type: "json" };

// User dictionary, which store words added by user without duplicates
let userDictionary = new Set();


    const userTextInput = document.getElementById("userText"); 
    const checkBtn = document.getElementById("checkBtn"); 
    const mainBlock = document.getElementById("main-block");

    const checkResultBlock = document.createElement("div");
    checkResultBlock.id = "check-result-block";
    mainBlock.appendChild(checkResultBlock);

checkBtn.addEventListener("click", checkSpelling);
function checkSpelling(){
    // Get value from the input and remove spaces before and after the text
    const userText = userTextInput.value.trim();
    // If after remove spaces userText is empty, function exits
    if(!userText) {
        return;
    }
    console.log(userText);
}