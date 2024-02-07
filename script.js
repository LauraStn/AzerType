
/*
créer un bouton "commencer"
quand on clique sur commencer la boucle se met en route
*/ 
let listeMots = ["Raiden", "Nilou", "Ganyu", "Zhongli", "Ayaka", "Alhaitham", "Yoimiya", "Nahida", "Furina"]
let score = 0
let wordHint = document.getElementById("wordHint")
let rand = Math.floor(Math.random() * listeMots.length)
let wordRandom = listeMots[rand]
let userScore = document.getElementById("userScore")

// Fonction pour choisir un nouveau mot aléatoire
function newWord() {
    let rand = Math.floor(Math.random() * listeMots.length);
    return listeMots[rand];
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
            form.reset() //Réinitialiser le formulaire
            wordRandom = newWord() //Génère un nouveau mot aléatoire
            wordHint.innerHTML = `Entrez le mot suivant: ${wordRandom}`
    //    for (score = 0; score <listeMots.length; score++){
    //     wordHint.innerText = `Entrez le mot suivant: ${wordRandom}`
    //    }    
    }else {
            window.alert("Réessayez")
            form.reset()
    }
    
})

document.querySelector("#start").addEventListener("click", (e) => {
    score = 0 // Réinitialiser le score
    updateScore()
    window.alert("C'est parti!")
    wordRandom = newWord(); // Choisir un nouveau mot aléatoire
    wordHint.innerText = `Entrez le mot suivant: ${wordRandom}`
    // document.querySelector("form").reset() // Réinitialiser le formulaire pour vider le champ
})