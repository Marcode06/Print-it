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

let indexCourrant = 0;


//récuparation des id des flêches
 let arrowLeft = document.querySelector('.arrow_left');
 let arrowRight = document.querySelector('.arrow_right');

//ajoute un écouteur click et l'affiche dans la console si on clique
// arrowLeft.addEventListener('click', function() {
// 	console.log('je clique sur La flèche gauche');
//  })

 //pour la flêche droite
arrowRight.addEventListener('click', function() {	
	if (indexCourrant === slides.length - 1 ){
		indexCourrant = 0;
	} else {
		indexCourrant = indexCourrant + 1;
	}
	 	console.log(indexCourrant);
 })

 // Pour la flèche gauche
arrowLeft.addEventListener('click', function() {
	if (indexCourrant <= 0) {
		indexCourrant = indexCourrant - 1;
	} else {
		indexCourrant = indexCourrant - 1;
	}

	// Test si l'index atteint -3 ou en dessous
	if (indexCourrant < -3) {
		indexCourrant = 0;
	}

	console.log(indexCourrant);
});

///////////// les dots //////////


// Sélection de l'élément parent pour ajouter les points
const dotsDiv = document.querySelector('.dots');

// Nombre d'images dans le slider
const nbImages = 4;
 
let i;

// Boucle pour créer et ajouter les points
for (i = 0; i < nbImages; i++) {
    // Crée un nouveau div pour chaque point
    const para = document.createElement('div');
    
    // Ajout de la classe 'dot' à ce div
    para.classList.add('dot');
        
    // Ajoute ce nouveau div à l'élément parent
    dotsDiv.appendChild(para);
}


