/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

document.getElementById('btn__reset').addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});

//Clicking on screen buttons or typing keys calls the handleInteraction function
const onscreenKeyboardButtons = document.getElementsByClassName('key');
for (const button of onscreenKeyboardButtons) {
    button.addEventListener('click', () => game.handleInteraction(button));
};

//parameter of handleInteraction = e or e.key or something else
for (const button of onscreenKeyboardButtons) {
    document.addEventListener('keydown', (e) => {
        if (button.textContent === e.key && !button.disabled) {
            game.handleInteraction(button);
            console.log
        }
    });
}

//Set focus state to start button
const startButton = document.getElementById('btn__reset');
startButton.focus();

