# Spell-checker

This project implements a text checker that identifies spelling mistakes based on a Basic English dictionary. The tool allows users to input text, and it checks if each word is present in the dictionary. Misspelled words are flagged, and users can add new words to their personal dictionary for future checks.<br>**The goal** is to help users check their text for spelling errors.

## Features
- **Text Input:** Users can enter text to check for spelling errors.
- **Spell Checking:** The web application scans each word against the Basic English dictionary. Words not found in the dictionary are flagged as mistakes.
- **Dictionary Addition:** Users can add misspelled words to their personal dictionary. After adding, those words won’t be flagged as errors.
- **Punctuation Handling:** The website properly handles punctuation marks (like commas and periods), ensuring that correct words adjacent to punctuation aren’t flagged as mistakes.

## Technologies
- **HTML:** Used for the structure of the project.
- **CSS:** Used CSS for styles.
- **JavaScript:** Used for functionality, including checking spelling, adding words, etc.
- **JSON:** Stores data for the Basic English Dictionary.
- **Jest:** Used for unit testing to ensure the core functionality works as expected.

## Set up & Installation
1. **Clone the repository** <br>``` git clone https://github.com/nadika-zavodovska/spell-checker ```
2. **Navigate into the project folder (if needed)** <br>``` cd spell-checker``` 
3. **Open index.html in your browser** <br>Ensure the project is served over HTTP for the module system to work. [Learn to serve over HTTP.](https://www.npmjs.com/package/http-server)

## Running tests
#### Make sure you have **Node.js** and **npm** installed before running the tests.
1. **Install dependencies:** <br>``` npm install ```
2. **Run Unit Tests:** <br>``` npm test ```<br>This will run the tests using [Jest](https://jestjs.io).
3. **Check the Test Results:** <br>The test results will be displayed in the terminal.

## Usage
1. Open the application in your browser.
2. Type text in the input field.
3. Click the "Check" button.
4. If there are misspelled words in the text, the application will display the highlighted misspelled words below the input field.
5. You can add misspelled words to your personal dictionary.

## Notes
If a user adds misspelled words, they will only remain in the personal dictionary until the application is refreshed. After refreshing, the user will need to add any misspelled words again to their personal dictionary.

## Contributions 
Contributions are welcome. If you find any bugs or want to improve the project, feel free to fork the repo, make your changes, and submit a pull request.