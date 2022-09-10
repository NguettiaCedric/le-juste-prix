// document.write('test');

// Etape 1 - Sélectionner nos éléments
let input      = document.querySelector('#prix');
let error      = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');


// Etape 2 - Cacher l'erreur
error.style.display = "none"; 

// Etape 3 - Générer un nombre aléatoire

let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups           = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier(nombre){  
    let instruction = document.createElement('div');

    if (nombre < nombreAleatoire) {
        //C'est plus;
        //Ajouter un contenu "#1 (4) c'est plus !";
        //Ajouter les classes instruction et plus;
        instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est plus !";
        instruction.className   = "plus"; 
        // instruction.classList.add("plus");

    } else if(nombre > nombreAleatoire) {
        //C'est moins
        //Ajouter un contenu "#1 (4) c'est moins !";
        //Ajouter les classes instruction et moins;
        instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est moins !";
        instruction.className   = "moins"; 
        // instruction.classList.add("moins");

    }else{
        //Félicitation vous avez trouvez le juste prix !
        //Ajouter un contenu "#1 (4) Félicitation vous avez trouvez le juste prix !";

        instruction.textContent = "#" + coups + " ( " + nombre + " ) Félicitation vous avez trouvé le juste prix !";
        instruction.className   = "fini"; 
        // instruction.classList.add("fini");

    }

    // Ajouter l'element devant les autres
    // document.querySelector('#instruction').prepend(instruction);
    document.body.insertBefore(instruction, document.querySelector('#instruction'));
    // document.body.append(header, menu, p);
}


// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

// function AfficherCacher(){
//     if (isNaN(input.value)) {
//         //Afficher le message d'erreur
//        error.style.display = 'inline' 
//     } else {
//         //Cacher le message d'erreur
//         error.style.display = 'none'
//     }
// }

input.addEventListener('keyup' , () => {
    if (isNaN(input.value)) {
        //Afficher le message d'erreur
       error.style.display = "inline"; 
    } else {
        //Cacher le message d'erreur
        error.style.display = "none";
    }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit' , (e) => {
    e.preventDefault();

    if (isNaN(input.value) || input.value == '') {
        //Mettre notre bordure de formulaire en rouge (red)
        input.style.borderColor = "red";
    } else {
        //Mettre notre bordure de formulaire en gris (silver)

        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);

    }
});







