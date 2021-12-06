console.log('Mon JS');


/************** DOC **************/

// APP
const app = document.querySelector('body')


// TITLE
const gameTitle = document.querySelector('h1')
gameTitle.style.textTransform = 'uppercase'
gameTitle.style.fontFamily = 'Arial'
gameTitle.style.margin = '20px'

// INPUT
const input = document.getElementById('input')


// BUTTON
const btnCheck = document.getElementById('btnCheck')
btnCheck.addEventListener('click', function () {
    console.log('inputvalue', input.value),
        game(input.value)
})


// RESULT
const results = document.getElementById('results')


// IMG
const img = document.getElementById('img-result')
img.style.display = 'flex'
img.style.width = '40%'
img.style.height = 'auto'
/************** Variables **************/


// Nombre à deviner
// let n = 65
let n = Math.floor(Math.random() * 99)
n !== 0



// Nombre d'essais
const maxTry = 6

// Essai Actuel
let essai = 0



/************ FUNCTION ************/


function game(number) {

    if (essai > maxTry) {
        console.log('Fini. Vous n\'avez plus d\'essai' + ' le nombre était ' + n + '.'),
            results.textContent = 'Fini, vous n\'avez plus d\'essai.' + ' Le nombre était ' + n + '.'

        //On génère un GIF
        img.setAttribute('src', 'zenitsu.gif')

        //Retry
        btnCheck.innerText = 'Retry'

        // Regénère un nouveau nombre à deviner
        n = Math.floor(Math.random() * 99)
        n !== 0

        // On passe les essais à 0
        essai = -1
    }

    // Résultat avec Réponse
    else if (number < n) results.textContent = "Perdu. Le nombre est plus grand.",
        img.setAttribute('src', '')
    else if (number > n) results.textContent = " Perdu. Le nombre est plus petit.",
        img.setAttribute('src', '')
    else if (number == n) results.textContent = "Gagné. Vous avez trouvez le bon numéro !",
        n = Math.floor(Math.random() * 99),
        //On relance à 0
        essai = -1,
        //On génère un GIF
        img.setAttribute('src', 'allmight.gif')

        
    //Résultat avec nb Essai
    // else if (i < 1) results.textContent = "Perdu. Vous n'avez plus d'essai restant."

    console.log('essaie nbr 1', essai)
    essai++
    //  console.log('essaie nbr 2', essai)

}



/************ CONSTRUCTION *************/


// // Récupération de nos éléments du dom
// définir le input à récupérer en front
// définir le button pour ajouter l'évènement


// // Variable du jeu
// une variable qui stocke le nbr d'essais max
// une variable de l'essai en cours


// button avec un évènement qui récupèrera le input pour déclencher la fonction du check (nbr à deviner && nbr d'essais)


// fonction comparer le nombre donné par l'User (input)
// // si il est trop grand : log "trop grand"
//  // si il est trop petit : log "trop petit"
//  // si il est égal : log "egale" (gagner)
//  // si le nombre d'essais dépasse le nombre d'essais max alors log : "perdu" && remettre le nombre max à 0

//Si joueur perd (trop d'essai sans trouver)--> gif zen'itsu
// Si joueur gagne --> gif allmight