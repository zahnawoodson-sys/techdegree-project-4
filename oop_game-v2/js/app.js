/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.getElementById('btn__reset');
const keyboardButtons = document.querySelectorAll('.key');

// cleanup function to sweep the board abd reset for a freash run
function resetGameboard () {
    // 1. clear out old list
    const ul = document.querySelector('#phrase ul');
    ul.innerHTML = '';
    // 2. loop through keyboard to re-enable everything and reset the classes
   keyboardButtons.forEach(button => {
    button.disabled = false;
    button.className = 'key'; 
  });
   // 3. reset the scoreboard back to full health
  const hearts = document.querySelectorAll('.tries img');
  hearts.forEach(heart => {
    heart.src = 'images/liveHeart.png';
  });
}
startButton.addEventListener('click', () => {
  resetGameboard();
  game = new Game();
  game.startGame();
});
// Tying interaction logic to every single onscreen key
keyboardButtons.forEach(button => {
  button.addEventListener('click', (event) => { 
    game.handleInteraction(event.target);
  });
});