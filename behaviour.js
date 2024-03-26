const scrambledWord = document.getElementById("scrambledWord")
const userText = document.getElementById("UserInputText")
const guess = document.getElementById("guessBtn")

const words = ["CSS", "CODE", "BASH", "FUNCTION", "VARIABLE", "JAVASCRIPT"]

// let newArray = []

// let score = 0;
// let streak = 0;
// let lives = 3;
// let penalty = -1;



function shuffleArray(words) {
    for (var i = words.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = words[i];
        words[i] = words[j];
        words[j] = temp;
    }
    return words
}

document.addEventListener('DOMContentLoaded', ()=>{
    scrambledWord.textContent = shuffleArray(words)[0]
})

// function shuffleWord(str) { 
//     words = Array.from(str); 
//     for (let i = 0; i < strArray.length - 1; i++) { 
//         let j = Math.floor(Math.random() * strArray.length); 
//         // Swap letters 
//         let temp = strArray[i]; 
//         strArray[i] = strArray[j]; 
//         strArray[j] = temp; 
//     } 
//     return strArray.join(" ");
// } 

// guess.addEventListener ("click", ()=>{
// })

// next.addEventListener ("click", ()=>{
// })

// function refresh() { 
//     index = Math.floor(Math.random() * 6);
//     displayWord = words[index];
//     scrambleWord.innerText = shuffle(displayWord).toUpperCase();
//     document.getElementById("output").innerText = "Result:";
// } 
  
// //Function call when page load for first time 
// refresh();