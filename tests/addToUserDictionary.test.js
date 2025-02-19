import { addToUserDictionary, userDictionary } from "../script";

describe("addToUserDictionary function", () => {
    let testWord1;
    let testWord2;
    let testWord3;
    let testInputElement;
    let testCheckBtn;
    let testMainBlock;

    beforeEach(() => {
        //Create elements just only for testing

        // Create testMainBlock element
        testMainBlock = document.createElement("div");
        testMainBlock.id = "main-block";
        document.body.appendChild(testMainBlock);

        // Create testInputElement
        testInputElement = document.createElement("input");
        testInputElement.id = "userText";
        document.body.appendChild(testInputElement);

        // Create testCheckBtn
        testCheckBtn = document.createElement("button");
        testCheckBtn.id = "checkBtn";
        document.body.appendChild(testCheckBtn);

        // reset the dictionary to an empty state before each test runs
        userDictionary.clear();

        // simulate user input text, prevent the alert from showing 
        testInputElement.value = "test1 test2 test3";

        // Call window.onload manually, simulate the page load event
        window.onload();

        testWord1 = "   test1   ";
        testWord2 = "    test2!  ";
        testWord3 = "   .test3    ";
    });

    test("should not add the same word twice", () => {
        // Add the testWord1 to the dictionary
        addToUserDictionary(testWord1);

        // Try adding the same word
        addToUserDictionary(testWord1);

        // Try adding the same word
        addToUserDictionary(testWord1);

        // Check if the testWord1 was only added once
        expect(userDictionary.size).toBe(1);
    });

    test("should add several (all misspelled words) words in the dictionary", () => {
        // Adding the testWord1 word
        addToUserDictionary(testWord1);

        // Adding the testWord2 word
        addToUserDictionary(testWord2);

        // Adding the testWord3 word
        addToUserDictionary(testWord3);

        // Check if all misspeled words were added to the dictionary
        expect(userDictionary.size).toBe(3);
    });

    test("should clean up symbols from the word and make word in lowercase before adding", () => {
        const wordWithSymbol1 = "world?";
        const wordWithSymbol2 = ".hello";
        const wordWithSymbol3 = "Fine";

        addToUserDictionary(wordWithSymbol1);
        addToUserDictionary(wordWithSymbol2);
        addToUserDictionary(wordWithSymbol3);

        expect(userDictionary.has("world")).toBe(true);
        expect(userDictionary.has("hello")).toBe(true);
        expect(userDictionary.has("fine")).toBe(true);
    });

    test("Words that begin with capital letters, should always be treated as 'correct' words", () => {
        const wordWithCapitalFirstLetterSymbol = "Hello";

        addToUserDictionary(wordWithCapitalFirstLetterSymbol);

        expect(userDictionary.has("hello")).toBe(true);
    });
});
