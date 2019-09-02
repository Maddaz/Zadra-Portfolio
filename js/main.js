// class TypeWriter {
//     constructor(txtElement, words, wait = 3000) {
//         this.txtElement = txtElement;
//         this.words = words;
//         this.txt = '';
//         this.wordIndex = 0;
//         this.wait = parseInt(wait, 10);
//         this.type();
//         this.isDeleting = false;
//     }

//     type() {
//          // Current index of word
//     const current = this.wordIndex % this.words.length;

//     //Get text of current word
//     const fullTxt = this.words[current];

//     // Check if deleting
//     if (this.isDeleting) {
//         //Remove a character
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         // Add a character
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     // Output result of this.txt
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     // Inital Type Speed
//     let typeSpeed = 300;

//     if (this.isDeleting) {
//         typeSpeed /= 2;
//     }

//     // Check if word is completely spelt out
//     if (!this.isDeleting && this.txt === fullTxt) {
//         // Make pause of 3 seconds at end of typing word
//         typeSpeed = this.wait;

//         // Set Delete to true
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         //Move to the next word
//         this.wordIndex++;
//         // Small pause before typing again
//         typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed);
//     }
// }

// // Init on DOM load
// document.addEventListener('DOMContentLoaded', init);

// // Init App
// function init() {
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');

//     // init type writer
//     new TypeWriter(txtElement, words, wait);

// }