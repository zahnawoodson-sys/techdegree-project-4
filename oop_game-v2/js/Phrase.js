/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        // forcing everything to lowercase from the beginning
        this.phrase = phrase.toLowerCase();
    }
    // code to add letter placeholders to the HTML
    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase ul');
        const characters = this.phrase.split('');

        // looping through each character to build out the actual UI elements on the board.
        characters.forEach(char => {
            const li = document.createElement('li');
            if (char === ' ') {
                li.className = 'space'; // giving the words some room
            } else {
                li.className = `hide letter ${char}`;
                li.textContent = char;
            }
            ul.appendChild(li);
        });
    }
    // code to check if the guesssed letter is in this.phrase
    checkLetter(letter){
        return this.phrase.includes(letter);
    }
    // code to reveal the letter on the board
    showMatchedLetter(letter){
        const matchedLetters = document.querySelectorAll(`.${letter}`);
        matchedLetters.forEach(li => {
            li.classList.replace('hide', 'show');
        });
    }
}