let myHeading = document.querySelector('#accueil');

let storedName = localStorage.getItem('nom');
myHeading.textContent = 'Audacieux ' + storedName + ' !';

//console.log(localStorage.nom)