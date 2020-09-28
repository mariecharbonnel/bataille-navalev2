// message accueil
let myHeading = document.querySelector('#accueil');

let storedName = localStorage.getItem('nom');
myHeading.textContent = 'Petit joueur ' + storedName + ' !';
