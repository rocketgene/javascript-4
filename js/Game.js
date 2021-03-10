/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor (){
        this.missed = 0;
        this.phrases = this.generatePhrases();
        this.activePhrase = null;
     }
     
     /**
      * Creates phrases as Phrase objects for use in game
      * @return {array} An array of phrases that could be used in the game
      */
     generatePhrases() {
        const phrase1 = new Phrase('this is hard');
        const phrase2 = new Phrase('phrase hunter');
        const phrase3 = new Phrase('good comments');
        const phrase4 = new Phrase('random phrase');
        const phrase5 = new Phrase('exceed expectations');

        const arr = [phrase1, phrase2, phrase3, phrase4, phrase5];
        return arr;
     }

     /**
      * Begins game by selecting random phrase and displaying it
      */
     startGame() {
        //Clear previous game data
        document.querySelector('ul').innerHTML = '';

        const onscreenKeyboardButtons = document.getElementsByClassName('key');
        for (const button of onscreenKeyboardButtons) {
           button.className = 'key';
           button.disabled = false;
        };

        const hearts = document.getElementsByClassName('tries');
        for (const heart of hearts) {
            heart.firstElementChild.src = 'images/liveHeart.png';
        }

        //Initialize screen
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        const randomPhrase = this.getRandomPhrase();
        this.activePhrase = randomPhrase;
        const phrase = new Phrase(randomPhrase.phrase);
        phrase.addPhraseToDisplay();
     }

     /**
      * Selects random phrase from phrases property
      * @return {Object} Phrase object chosen to be used
      */
     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)]
     }
     
     /**
      * Handles onscreen keyboard button clicks
      * @param (HTMLButtonElement) button - The clicked button element
      */
     handleInteraction(button) {
         const letter = button.textContent;
         const phrase = new Phrase(this.activePhrase.phrase);
         const onscreenKeyboardButtons = document.getElementsByClassName('key');

         if (phrase.checkLetter(letter)) {
            phrase.showMatchedLetter(letter);
            button.classList.add('chosen');
            button.disabled = true;
         } else if (!phrase.checkLetter(letter)) {
            button.classList.add('wrong');
            button.disabled = true;
            this.removeLife();
         }

         if (this.checkForWin()) {
            this.gameOver(true);
         }
     }

     /**
      * Checks for winning move
      * @return {boolean} True if game has been won, false if game wasn't won
      */
     checkForWin() {
        const hiddenElements = document.getElementsByClassName('hide');
        if (hiddenElements.length === 0) {
            return true;
        } else {
           return false;
        }
     }
     
     /**
      * Increases the value of the missed property
      * Removes a life from the scoreboard
      * Checks if player has remaining lives and ends game if player is out
      */
     removeLife() {
         this.missed += 1;
         const heart = document.getElementsByClassName('tries');
         heart[this.missed - 1].firstElementChild.src = 'images/lostHeart.png';
         if (this.missed === 5) {
            this.gameOver(false);
         };
     }

     /**
      * Displays game over message
      * @param {boolean} gameWon - Whether or not the user won the game
      */
     gameOver(gameWon) {
         const overlay = document.getElementById('overlay');
         if (gameWon) {
            document.getElementById('game-over-message').innerHTML = "You Win!";
            overlay.className = 'win';
         } else {
            document.getElementById('game-over-message').innerHTML = "You Lose...";
            overlay.className = 'lose';
         }
         overlay.removeAttribute('style');
         const startButton = document.getElementById('btn__reset');
         startButton.focus();
     };
 }

