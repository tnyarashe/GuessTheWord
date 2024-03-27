//declare variables
const scrambledWord = document.getElementById("scrambledWord")
const userText = document.getElementById("UserInputText")
const nextWord = document.getElementById("nxtWrd")
const checkWord = document.getElementById("chckWrd")
const results = document.getElementById("result")

//declare array
const words = ["css", "code", "bash", "function", "variable", "javascript"]


//declare shuffle array function
function shuffleArray(shwords) {
    for (let i = shwords.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = shwords[i];
        shwords[i] = shwords[j];
        shwords[j] = temp;
    }
    return shwords
}

//declare check function
function check () {
   const sortedScrambledWord = scrambledWord.textContent.split("").sort().join("")
   const sortedUserWords = userText.value.split("").sort().join("").toLowerCase()

    if(sortedScrambledWord === sortedUserWords) {
        results.textContent = "Correct!"
    }
    else{
        results.textContent = "Incorrect! Try again."
    }
}

//declare shuffle word function
function shuffleWord(str) { 
    scrmbldW = Array.from(str)
    for (let i = 0; i < scrmbldW.length - 1; i++) { 
        let j = Math.floor(Math.random() * scrmbldW.length); 
        // Swap letters 
        let temp = scrmbldW[i]; 
        scrmbldW[i] = scrmbldW[j]; 
        scrmbldW[j] = temp; 
    } 
    return scrmbldW.join("");
}

//display shuffled word when page loads
document.addEventListener('DOMContentLoaded', ()=> {
    scrambledWord.textContent = shuffleWord(shuffleArray(words)[0])
})

//declare next word button
nextWord.addEventListener("click", ()=> {
    scrambledWord.textContent = shuffleWord(shuffleArray(words)[0])
})

//declare check word button
checkWord.addEventListener("click", check)