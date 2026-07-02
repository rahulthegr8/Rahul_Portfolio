// ====================================
// TYPING EFFECT JAVASCRIPT
// ====================================

// Jo words screen par dikhne hain
const words = [
    "Frontend Developer",
    "WordPress Developer",
    "UI/UX Designer",
    "Web Designer"
];

// Current word ka number
let wordIndex = 0;

// Current letter ka number
let charIndex = 0;

// Delete mode ON/OFF
let isDeleting = false;

// HTML se text element select karo
// <span id="changing-text"></span>
const changingText = document.getElementById("changing-text");

// ====================================
// TYPING FUNCTION
// ====================================

function typeEffect(){

    // Current word nikalo
    const currentWord = words[wordIndex];

    // Agar delete karna hai
    if(isDeleting){

        // Ek-ek letter remove karo
        changingText.textContent =
        currentWord.substring(0, charIndex - 1);

        charIndex--;

    }else{

        // Ek-ek letter add karo
        changingText.textContent =
        currentWord.substring(0, charIndex + 1);

        charIndex++;
    }

    // Word complete ho gaya
    if(!isDeleting && charIndex === currentWord.length){

        // Delete start karo
        isDeleting = true;

        // 1.2 second ruk jao
        setTimeout(typeEffect, 1200);

        return;
    }

    // Word poora delete ho gaya
    if(isDeleting && charIndex === 0){

        // Next word par jao
        isDeleting = false;

        wordIndex++;

        // Last word ke baad first word
        if(wordIndex >= words.length){
            wordIndex = 0;
        }
    }

    // Typing speed
    setTimeout(
        typeEffect,
        isDeleting ? 60 : 120
    );
}

// ====================================
// FUNCTION START
// ====================================

typeEffect();