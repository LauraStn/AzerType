/**l'appli propose un mot
 * l'utilisateur écrit ce mot
 * 
 * SI le mot écrit par l'utlisateur = le mot porposé par l'appli
 ALORS ajout d'un point

*/
// let motTapeOk = true

// if (motTapeOk) {
//     console.log("Bravo, vous avez correctement tapé le mot ")
// } else {
//     console.log("Echec, le mot n'est pas correct")
// }
// const motApplication = "Bonjour" // Essayez de mettre un autre mot ici !
// let motUtilisateur = prompt("Entrez le mot : " + motApplication)

// if (motUtilisateur === motApplication) {
//     console.log("Bravo !")
// } else {
//     console.log("Vous avez fait une erreur de frappe.")
// }


// let motUtilisateur = prompt("Entrez le mot : " + listeMots[0])
// if (motUtilisateur === listeMots[0]){
//     score ++
//     console.log(score)
// }

// motUtilisateur = prompt("Entrez le mot : " + listeMots[1])
// if (motUtilisateur === listeMots[1]){
//     score ++
//     console.log(score)
// }

// motUtilisateur = prompt("Entrez le mot : " + listeMots[2])
// if (motUtilisateur === listeMots[2]){
//     score ++
//     console.log(score)
// }

let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let listPhrase = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]

let score = 0

let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}

if (choix === "mots"){

    for (let mot = 0; mot < listeMots.length; mot++){
        let motUtilisateur = prompt("Entrez le mot : " + listeMots[mot])
        if (motUtilisateur === listeMots[mot]){
            score ++
        }
    }
    console.log("Votre score est de " + score + " sur " + listeMots.length)
}else {

    for (let phrase = 0; phrase < listPhrase.length; phrase++){
    let phraseUtilisateur = prompt("Entrez la phrase : " + listPhrase[phrase])
    if ( phraseUtilisateur === listPhrase[phrase]){
        score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listePhrases.length)
}




// const arr = ["oui","non","maybe"]


// arr.forEach( value => { 
//     console.log(value)
// })

// for(let i of arr){
//     console.log(i)
// }

// objectName.propertyName
// //or
// objectName['propertyName']
// // exemple:

// monPersonnage.age
// monPersonnage['age']