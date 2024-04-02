//declare variables
const scrambledWord = document.getElementById("scrambledWord")
const userText = document.getElementById("UserInputText")
const nextWord = document.getElementById("nxtWrd")
const checkWord = document.getElementById("chckWrd")
const results = document.getElementById("result")
const newGame = document.getElementById("newGameBtn")
const gameOverTitle = document.getElementById("gameOver")

//declare array
const words = ["css", "code", "bash", "function", "variable", "javascript"]

//declare points variables
const scoreVariable = document.getElementById("score")
const livesVariable = document.getElementById("lives")
const streakVariable = document.getElementById("streak")

let score = 0;
let lives = 3;
let streak = 0;

//declare shuffle array function
function shuffleArray(str) {
    for (let i = str.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
    }
    return str
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

//declare check function
function check () {
    let sortedScrambledWord = scrambledWord.textContent.split("").sort().join("")
    let sortedUserWords = userText.value.split("").sort().join("").toLowerCase()

    if(sortedScrambledWord === sortedUserWords) {
        results.textContent = "Correct!"
        score += 5
        scoreVariable.textContent = "Score: " + score
        setTimeout(function() {
            results.textContent = ""
            scrambledWord.textContent = shuffleWord(shuffleArray(words)[0])
            userText.value = ""
        }, 2500)
    }

    else if(userText.value === ""){
        results.textContent = "Please type a word."
        setTimeout(function(){
            results.textContent = ""
        }, 2500)
    }
    else {
        while (lives > 0) {
            results.textContent = "Incorrect! Try again."
            setTimeout(function(){
                results.textContent = ""
                lives--
                livesVariable.textContent = "Lives: " + lives
                userText.value = ""
            }, 2500)
            break
        }
    }
    if (lives === 0) {
        gameOverTitle.textContent = "GAME OVER!"
    }
}

//declare new game function
function startOver () {
    score = 0;
    lives = 3;
    streak = 0;
    scoreVariable.textContent = "Score: " + score
    livesVariable.textContent = "Lives: " + lives
    streakVariable.textContent = "Streak: " + streak
    gameOverTitle.textContent = ""
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

//declare start new game button
newGame.addEventListener("click", startOver)