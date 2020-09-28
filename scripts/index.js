const CLEAR_LOCAL_STORAGE = false;

let myButton = document.querySelector('#jouer');
let myHeading = document.querySelector('#accueil');
let inputText = document.getElementById('pseudo');
let change = document.getElementById('change');
let level = document.getElementById('level');
let facile = document.getElementById('facile');
let difficile = document.getElementById('difficile');


//ajouter un utilisateur
function setUserName() {
    let myName = document.getElementById('pseudo').value;
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Bienvenue ' + myName;

    if(myName!=""){
    myHeading.classList.remove('hidden');
    change.classList.remove('hidden');
    inputText.classList.add('hidden');
    myButton.classList.add('hidden');
    }
    }

// changer d'utilisateur
function newUserName(){
    let myName = document.getElementById('pseudo').value;
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Bienvenue ' + myName;

    inputText.value="";
    change.classList.add('hidden');
    inputText.classList.remove('hidden');
    myButton.classList.remove('hidden');
    myHeading.classList.add('hidden');
  }

  if (!localStorage.getItem('nom')) {
    newUserName();
     facile.classList.add('hidden');
     difficile.classList.add('hidden');

  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Bienvenue ' + storedName;
    inputText.classList.add('hidden');
    myButton.classList.add('hidden');
    change.classList.remove('hidden');
    facile.classList.remove('hidden');
    difficile.classList.remove('hidden');
  }

  myButton.addEventListener('click', function() {
    setUserName();
    ;
    if(inputText.value==""){
    facile.classList.add('hidden');
    difficile.classList.add('hidden');
    }
    else{
    facile.classList.remove('hidden');
    difficile.classList.remove('hidden');
    }
  });

  change.addEventListener('click', function() {
    newUserName();
    if(inputText.value==""){
      facile.classList.add('hidden');
      difficile.classList.add('hidden');
      }
      else{
      facile.classList.remove('hidden');
      difficile.classList.remove('hidden');
      }

  });
