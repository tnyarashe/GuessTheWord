//declare variables
const scrambledWord = document.getElementById("scrambledWord")
const userText = document.getElementById("UserInputText")
const nextWord = document.getElementById("nxtWrd")
const checkWord = document.getElementById("chckWrd")
const results = document.getElementById("result")
const newGame = document.getElementById("newGameBtn")
const gameOverTitle = document.getElementById("gameOver")
const life = document.getElementById("heart")

//declare array
const words = ["css", "html", "code", "bash", "function", "variable", "javascript", "github", "element", "terminal"]

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
    const sortAllWords = words.map(element => element.split("").sort().join(""))

    if(sortedScrambledWord === sortedUserWords) {
        results.textContent = "Correct!"
        score += 5
        scoreVariable.textContent = "Score: " + score
        setTimeout(function() {
            results.textContent = ""
            scrambledWord.textContent = shuffleWord(shuffleArray(words)[0])
            userText.value = ""
        }, 2500)

console.log(sortAllWords.indexOf(sortedUserWords))
console.log(sortAllWords)
words.shift()
    }

    else if(userText.value === ""){
        results.textContent = "Please type a word."
        setTimeout(function() {
            results.textContent = ""
        }, 2500)
    }

    else {
        while (lives > 0) {
            lives--
            trackLives()
            results.textContent = "Incorrect! Try again."
            setTimeout(function() {
                results.textContent = ""
                userText.value = ""
            }, 2500)
            break
        }
    }
    if (lives === 0) {
        gameOverTitle.textContent = "GAME OVER!"
    }
    if (score === 50) {
        gameOverTitle.textContent = "YOU WIN! GAME OVER!"
    }
}

//declare new game function
function startOver () {
    // score = 0;
    // lives = 3;
    // streak = 0;
    // scoreVariable.textContent = "Score: " + score
    // livesVariable.textContent = "Lives: "
    // livesVariable.innerHTML += '<i class="fa-solid fa-heart"></i>'
    // gameOverTitle.textContent = ""
    location.reload()
}

function trackLives(){
    livesVariable.innerHTML = ""
    livesVariable.textContent = "Lives: "
    for (i = 0; i < lives; i++ ){
        livesVariable.innerHTML += '<i class="fa-solid fa-heart"></i>'
    }
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