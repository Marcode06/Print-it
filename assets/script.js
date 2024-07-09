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

//récuparation des id des flêches
let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');

//ajoute un écouteur click et l'affiche dans la console si on clique
arrowLeft.addEventListener('click', function() {
	console.log('je clique sur La flèche gauche');
})

arrowRight.addEventListener('click', function() {
	console.log('je clique sur La flèche droite');
})




