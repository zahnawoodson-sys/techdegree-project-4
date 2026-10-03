/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.activePhrase = null;
        this.phrases = [
            new Phrase("Technology advocacy"),
            new Phrase("Live music and Karaoke"),
            new Phrase("Creamy salmon risotto"),
            new Phrase("Full stack baddie"),
            new Phrase("Community systems building")
        ];
    }
    // code to randomly select a phrase from this.phrases
    getRandomPhrase(){
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }
    // code to hide the start screen and display the active phrase
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        // picking a phrase to lay on the board
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    // code for when a user clicks a keyboard button - locks it
    handleInteraction(button) {
        button.disabled = true;
        const letter = button.textContent;

        // core logic - if guess us wrong, deduct a life. If right, will reaveal and check for win.
        if (!this.activePhrase.checkLetter(letter)) {
            button.classList.add('wrong');
            this.removeLife();
        } else {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);

            if (this.checkForWin()) {
                this.gameOver(true);
            }
        }
    }
    removeLife() {
        const liveHearts = document.querySelectorAll('img[src="images/liveHeart.png"]');
        if (liveHearts.length > 0) {
            liveHearts[0].src = 'images/lostHeart.png';
            this.missed += 1;
        }
        // hit 5 strikes, game over
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        return hiddenLetters.length === 0;
    }
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        const gameOverMessage = document.getElementById('game-over-message');
        // overlay back up and swap the messaging on how they did
        overlay.style.display = 'flex';
        overlay.className = gameWon ? 'win' : 'lose';
        gameOverMessage.textContent = gameWon ? 'Great job! You winnnnn!' : 'Out of lives. Try again!';
    }
}