const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let indexCourant = 0;

//récuparation des classes des flêches
 let flecheGauche = document.querySelector('.arrow_left');
 let flecheDroite = document.querySelector('.arrow_right');

 // selection dans le HTML des classes de l'image et du texte
 const banniereImage = document.querySelector('.banner-img');
 const tagLine = document.querySelector('.titre');

 // La Fonction met donc à jour l’image et son texte affiché
 function updateImage(index) { // Index = La position de l'objet dans le tableau

// C’est l’URL de image a afficher, son chemin, et accède au nom de l’image
	banniereImage.src = './assets/images/slideshow/' + slides[index].image;
	tagLine.innerHTML = slides[index].tagLine; //Idem pour le texte
}

///////////// Afficher les dots ////////////////

const dotsDiv = document.querySelector('.dots'); // selection de la classe des Bullets Points
const nbImages = 4; // Nb total des slides
let i; // Déclaration de la variable compteur i

// Boucle for pour créer et ajouter les points :
for (i = 0; i < nbImages; i++) {   // Initialise i à 0, l'incrémente de 1 à chaque tour, et s'arrête après avoir créé tous les points.
    const para = document.createElement('div');   // crée la nouvelle 'div' pour chaques points
    para.classList.add('dot');       // Ajoute la classe 'dot' à la div
    dotsDiv.appendChild(para);	  // Ajoute la div à l'élement parent 'dotsDiv'
}
//selection et stockage de tout les élements des points dans 'dot'
let dot = document.querySelectorAll('.dot'); // Selection de tout les dot
	function updateDots(index) { // Prend l'index en paramètre

	// Affiche le point de la classe 'dot_selected' sous l'image en cour :
	dot[index].classList.add('dot_selected'); // Ajoute la classe 'dot_selected' à l'index (pour affiché le point blanc?)
}

 //Pour la flêche droite : ajout d'un écouteur d'évèvement 'addEventListener' pour son clic
 	flecheDroite.addEventListener('click', function() { 
	dot[indexCourant].classList.remove('dot_selected'); // Avec 'remove' on retire la classe 'dot_selected' du point actuel

	// Condition : pour mettre à jour ‘indexCourant’
	if (indexCourant === slides.length - 1 ){ // Si on est à la dernière slide
		indexCourant = 0;  // On revient à la 1ere pour créer le déffilement infini
	} else {
		indexCourant = indexCourant + 1; // Sinon on passe à la suivante et
	}
        updateImage(indexCourant); // On met à jour l'image et le dot affiché
		updateDots(indexCourant); 
	 	console.log(indexCourant);
 })

//Pour la flêche gauche : ajout d'un écouteur d'évèvement 'addEventListener' pour son clic et 
	flecheGauche.addEventListener('click', function() { 
	dot[indexCourant].classList.remove('dot_selected'); 

		// on procède de la même façon en sens inverse
    if (indexCourant === 0) { 	// Si on est à la 1ere image
        indexCourant = slides.length - 1; // On passe à la dernière (pour créer le défilement infinit).
    } else {
        indexCourant = indexCourant - 1; // Sinon on passe à la précedente
    }
	//On met à jour l'image et le texte
    updateImage(indexCourant); 
	updateDots(indexCourant); 
    console.log(indexCourant);
});

// Initialisation 
updateImage(indexCourant); // Initialise l'image et la légende avec la première image.
updateDots(indexCourant); // Initialise les bullets points pour qu'ils allument le point de la première image.

