let wordList = ["Raiden", "Nilou", "Ganyu", "Zhongli", "Ayaka", "Alhaitham", "Yoimiya", "Nahida", "Furina"]
let score = 0
let wordHint = document.getElementById("wordHint")
let rand = Math.floor(Math.random() * wordList.length)
let wordRandom = wordList[rand]
let userScore = document.getElementById("userScore")


function newWord() {
    let rand = Math.floor(Math.random() * wordList.length);
    return wordList[rand];
}

function updateScore() {
    userScore.innerText = `Votre Score: ${score}`;
}

document.querySelector("form").addEventListener("submit", (e) =>{
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    let userInput = data.get("text") 
    
    if (userInput === wordRandom){
            score ++    
            userScore.innerText = `Votre Score: ${score}`
            window.alert("Bravo!")
            form.reset()
            wordRandom = newWord()
            wordHint.innerHTML = `Entrez le mot suivant: ${wordRandom}`
    }else {
            window.alert("Réessayez")
            form.reset()
    }
    
})

document.querySelector("#start").addEventListener("click", (e) => {
    score = 0 //
    updateScore()
    window.alert("C'est parti!")
    wordRandom = newWord();
    wordHint.innerText = `Entrez le mot suivant: ${wordRandom}`
})