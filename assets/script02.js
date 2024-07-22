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

//1 recup les id des points : 
const dots = document.querySelectorAll('.dot');

//2 garde l'index courrant
let indexCourrant = 0;

//3 Fonction pour mise à jour les bullet points
function updateDots(index) {
    // Correction de l'index pour boucler entre les points
    indexCourrant = (index + dots.length) % dots.length;

    // Mettre à jour les points indicateurs
    dots.forEach((dot, i) => {
        if (i === indexCourrant) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}


//récuparation des id des flêches
 let arrowLeft = document.querySelector('.arrow_left');
 let arrowRight = document.querySelector('.arrow_right');

//ajoute un écouteur click et l'affiche dans la console si on clique
arrowLeft.addEventListener('click', function() {
	console.log('je clique sur La flèche gauche');
	updateDots(indexCourrant - 1);
 })

arrowRight.addEventListener('click', function() {
 	console.log('je clique sur La flèche droite');
	updateDots(indexCourrant +1);
 })

 updateDots(indexCourrant);