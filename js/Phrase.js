/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor (phrase) {
        this.phrase = phrase;
     }

     /**
      * Display phrase on game board
      */
     addPhraseToDisplay() {
        const ul = document.querySelector('ul');
        const splitStr = this.phrase.split('');
        for (let char of splitStr) {
            if (char === ' ') {
                ul.innerHTML += `<li class="space"> </li>`
            } else {
                ul.innerHTML += `<li class="hide letter ${char}">${char}</li>`
            }
        }
     }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
     checkLetter(letter) {
        const splitStr = this.phrase.split('');
        let letterIsInPhrase = false;
        splitStr.find(char => char === letter) ? letterIsInPhrase = true : letterIsInPhrase = false;        
        return letterIsInPhrase;
     }

     /**
      * Displays passed letter on screen after a match is found
      * @param (string) letter - Letter to display
      */
     showMatchedLetter(letter) {
        const matchingLetterElements = document.getElementsByClassName(letter);
        //console.log(matchingLetterElements);
        
        for (let i = 0; i < matchingLetterElements.length; i++) {
            
            matchingLetterElements[i].classList.remove('hide');
            matchingLetterElements[i].classList.add('show', 'pulse');
        }
     }
 }
