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


//récuparation des id des flêches
 let arrowLeft = document.querySelector('.arrow_left');
 let arrowRight = document.querySelector('.arrow_right');

 // images slider aux clics des fleches
 const bannerImg = document.querySelector('.banner-img');

//  function updateSlide(index) {
//     bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
// }

// Fonction pour mettre à jour l'image
function updateSlide(index) {
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
}




 //pour la flêche droite
arrowRight.addEventListener('click', function() {	
	if (indexCourant === slides.length - 1 ){
		indexCourant = 0;
	} else {
		indexCourant = indexCourant + 1;
	}
        updateSlide(indexCourant);///////NEW
	 	console.log(indexCourant);


 })

//pour la flêche gauche
//  arrowLeft.addEventListener('click', function() {
//     indexCourant -= 1;
//     if (indexCourant < 0) {
//         indexCourant = slides.length - 1;
//     }
//     updateSlide(indexCourant);
//     console.log(indexCourant);
// });

//pour la flêche gauche
arrowLeft.addEventListener('click', function() {
    if (indexCourant === 0) {
        indexCourant = slides.length - 1;
    } else {
        indexCourant = indexCourant - 1;
    }
    updateSlide(indexCourant); ///////NEW
    console.log(indexCourant);
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


