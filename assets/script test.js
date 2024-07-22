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
// let arrowLeft = document.querySelector('.arrow_left');
// let arrowRight = document.querySelector('.arrow_right');

//ajoute un écouteur click et l'affiche dans la console si on clique
// arrowLeft.addEventListener('click', function() {
// 	console.log('je clique sur La flèche gauche');
// })

// arrowRight.addEventListener('click', function() {
// 	console.log('je clique sur La flèche droite');
// })

// Sélection des éléments du DOM
const bannerImg = document.querySelector('.banner-img');
const dots = document.querySelectorAll('.dot');

// Initialisation de l'index courant
let currentIndex = 0;

// Fonction pour mettre à jour le carrousel
function updateCarousel(index) {
    // Correction de l'index pour boucler entre les diapositives
    currentIndex = (index + slides.length) % slides.length;
    
    // Mettre à jour l'image et le texte
    const { image, tagLine } = slides[currentIndex];
    bannerImg.src = `assets/images/slideshow/${image}`;
    bannerImg.alt = `Slide ${currentIndex + 1}`;
    document.querySelector('p').innerHTML = tagLine;

    // Mettre à jour les points indicateurs
    dots.forEach((dot, i) => dot.classList.toggle('dot_selected', i === currentIndex));
}

// Gestionnaires d'événements pour les flèches de navigation
let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener('click', function() {
    console.log('je clique sur La flèche gauche');
    updateCarousel(currentIndex - 1);
});

arrowRight.addEventListener('click', function() {
    console.log('je clique sur La flèche droite');
    updateCarousel(currentIndex + 1);
});

// Afficher la première diapositive au chargement de la page
updateCarousel(currentIndex);
