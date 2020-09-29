const userGrid = document.getElementById('grid-user');
const placeButton = document.getElementById('place-ok');
const computerGrid = document.getElementById('grid-computer');
const size = 10;
const userSquares = [];
const computerSquares = [];
let shipUserSquares = 0;
let shipComputerSquares = 0;
let shipComputerShot = 0;
let shipUserShot = 0;
let randomShoot;

/*let grid = [];
let dataGrid = [];
let refType = {};
let ship;
let shipAI = 0;*/

let Orientation = generateOrientation();

let destroyerPosition = generateDestroyer();
let destroyerPosition2;
let destroyerPosition3;
let destroyerPosition4;
let destroyerPosition5;

let battleshipPosition = generateBattleship();
let battleshipPosition2;
let battleshipPosition3;
let battleshipPosition4;

let submarinePosition = generateSubmarine();
let submarinePosition2;
let submarinePosition3;

let smallshipPosition = generateSmallship();
let smallshipPosition2;

//console.log(Orientation);
generateShips();

console.log(smallshipPosition2)

function generateOrientation(max) {
    return Math.floor(Math.random() * Math.floor(2));
};

function generateShips() {
    Orientation = generateOrientation();

    if (Orientation === 0) {
        destroyerPosition2 = destroyerPosition + 1;
        destroyerPosition3 = destroyerPosition + 2;
        destroyerPosition4 = destroyerPosition + 3;
        destroyerPosition5 = destroyerPosition + 4;
    }

    if (Orientation === 1) {
        destroyerPosition2 = destroyerPosition + 10;
        destroyerPosition3 = destroyerPosition + 20;
        destroyerPosition4 = destroyerPosition + 30;
        destroyerPosition5 = destroyerPosition + 40;
    }

    Orientation = generateOrientation();
    //battleship
    if (Orientation === 0) {
        battleshipPosition2 = battleshipPosition + 1;
        battleshipPosition3 = battleshipPosition + 2;
        battleshipPosition4 = battleshipPosition + 3;
    }

    if (Orientation === 1) {
        battleshipPosition2 = battleshipPosition + 10;
        battleshipPosition3 = battleshipPosition + 20;
        battleshipPosition4 = battleshipPosition + 30;
    }

    Orientation = generateOrientation();
    //submarine
    if (Orientation === 0) {
        submarinePosition2 = submarinePosition + 1;
        submarinePosition3 = submarinePosition + 2;
    }

    if (Orientation === 1) {
        submarinePosition2 = submarinePosition + 10;
        submarinePosition3 = submarinePosition + 20;
    }

    Orientation = generateOrientation();
    //smallShip
    if (Orientation === 0) {
        smallshipPosition2 = smallshipPosition + 1;
    }

    if (Orientation === 1) {
        smallshipPosition2 = smallshipPosition + 10;
    }

};




//creation grille utilisateur
createUserBoard(userGrid, userSquares, size);

//selection des emplacements bateaux

function apercu(event) {
    if (event.target.classList.contains('mer')) {
        event.target.classList.replace('mer', 'bateau-user');
        shipUserSquares = shipUserSquares + 1;
    }

    else {
        alert("Tu as déjà sélectionné cette case ! ");
        shipUserSquares = shipUserSquares - 1;
    };

    if (shipUserSquares === 1) {
        alert("Sélectionne 5 cases consécutives pour placer ton porte-avion");
    };

    if (shipUserSquares === 5) {
        alert("Sélectionne 4 cases consécutives pour placer ton croiseur")
    };

    if (shipUserSquares === 9) {
        alert("Sélectionne 3 cases consécutives pour placer ton sous-marin");
    };

    if (shipUserSquares === 12) {
        alert("Sélectionne 2 cases consécutives pour placer ton torpilleur");
    }

    if (shipUserSquares >= 14) {
        alert("Bravo ta flotte est placée !");
        userGrid.removeEventListener('click', apercu);
        placeButton.classList.remove('hidden');
    }
    console.log(shipUserSquares)
};

userGrid.addEventListener('click', apercu);
//console.log(shipUserSquares);

placeButton.addEventListener('click', (event) => {
    placeButton.classList.add('hidden');
    userGrid.removeEventListener('click', apercu);
    computerGrid.addEventListener('click', userShot);
    computerGrid.addEventListener('click', randomCible);

});



//creation grille computer
createComputerBoard(computerGrid, computerSquares, size);

function createUserBoard(grid, squares, size) {

    for (let cote = 0; cote < size * size; cote++) {
        const square = document.createElement('div');
        square.classList.add('mer');
        square.id = cote;
        grid.appendChild(square);
        squares.push(square);
    }
}

function createComputerBoard(grid, squares, size) {

    for (let cote = 0; cote < size * size; cote++) {
        const square = document.createElement('div');
        square.classList.add('mer');
        square.classList.add('grille');
        square.id = cote + 1000;
        grid.appendChild(square);
        squares.push(square);

        if (cote === destroyerPosition) {
            square.classList.replace('mer', 'bateau-computer');
            shipComputerSquares = shipComputerSquares + 1;
        };

        if (cote === destroyerPosition2) {
            square.classList.replace('mer', 'bateau-computer');
            shipComputerSquares = shipComputerSquares + 1;
        };

        if (cote === destroyerPosition3) {
            square.classList.replace('mer', 'bateau-computer');
            shipComputerSquares = shipComputerSquares + 1;
        };

        if (cote === destroyerPosition4) {
            square.classList.replace('mer', 'bateau-computer');
            shipComputerSquares = shipComputerSquares + 1;
        };

        if (cote === destroyerPosition5) {
            square.classList.replace('mer', 'bateau-computer');
            shipComputerSquares = shipComputerSquares + 1;
        };

        //positionnement battleship

        if (cote === battleshipPosition) {
            square.classList.replace('mer', 'bateau-computer');
            shipComputerSquares = shipComputerSquares + 1;
        };

        if (cote === battleshipPosition2) {
            square.classList.replace('mer', 'bateau-computer');
            shipComputerSquares = shipComputerSquares + 1;
        };

        if (cote === battleshipPosition3) {
            square.classList.replace('mer', 'bateau-computer');
            shipComputerSquares = shipComputerSquares + 1;
        };
        if (cote === battleshipPosition4) {
            square.classList.replace('mer', 'bateau-computer');
            shipComputerSquares = shipComputerSquares + 1;
        };


        //postionnement submarine
        if (cote === submarinePosition) {
            square.classList.replace('mer', 'bateau-computer');
            shipComputerSquares = shipComputerSquares + 1;
        };

        if (cote === submarinePosition2) {
            square.classList.replace('mer', 'bateau-computer');
            shipComputerSquares = shipComputerSquares + 1;
        };

        if (cote === submarinePosition3) {
            square.classList.replace('mer', 'bateau-computer');
            shipComputerSquares = shipComputerSquares + 1;
        };

        //positionnement smallship
        if (cote === smallshipPosition) {
            square.classList.replace('mer', 'bateau-computer');
            shipComputerSquares = shipComputerSquares + 1;
        };

        if (cote === smallshipPosition2) {
            square.classList.replace('mer', 'bateau-computer');
            shipComputerSquares = shipComputerSquares + 1;
        };
    }
};


function generateDestroyer() {

    let val = Math.floor(Math.random() * 99);
    if (Orientation === 0) {
        if ((val === [5 - 9]) || (val === [15 - 19]) || (val === [25 - 29]) || (val === [35 - 39]) || (val === [45 - 49]) || (val === [55 - 59]) || (val === [65 - 69]) || (val === [75 - 79]) || (val === [85 - 89]) || (val === [95 - 99]) || (val + 1 > 99) || (val + 2 > 99) || (val + 3 > 99) || (val + 4 > 99)) { return val } else { val = Math.floor(Math.random() * 99) } return val;
    };
    if (Orientation === 1) {
        if ((val === [60 - 69]) || (val === [70 - 79]) || (val === [80 - 89]) || (val === [90 - 99]) || (val === [95 - 99]) || (val + 1 > 99) || (val + 2 > 99) || (val + 3 > 99) || (val + 4 > 99)) { return val } else { val = Math.floor(Math.random() * 99) } return val;
    };
};

function generateBattleship() {
    let val = Math.floor(Math.random() * 99);
    if (Orientation === 0) {
        if ((val + 1 > 99) || (val + 2 > 99) || (val + 3 > 99) || (val === [6 - 9]) || (val === [16 - 19]) || (val === [26 - 29]) || (val === [36 - 39]) || (val === [46 - 49]) || (val === [56 - 59]) || (val === [66 - 69]) || (val === [76 - 79]) || (val === [86 - 89]) || (val === [96 - 99]) || (val === destroyerPosition) || (val === destroyerPosition2) || (val === destroyerPosition3) || (val === destroyerPosition4) || (val === destroyerPosition5) || (val + 1 === destroyerPosition) || (val + 1 === destroyerPosition2) || (val + 1 === destroyerPosition3) || (val + 1 === destroyerPosition4) || (val + 1 === destroyerPosition5) || (val + 2 === destroyerPosition) || (val + 2 === destroyerPosition2) || (val + 2 === destroyerPosition3) || (val + 2 === destroyerPosition4) || (val + 2 === destroyerPosition5) || (val + 3 === destroyerPosition) || (val + 3 === destroyerPosition2) || (val + 3 === destroyerPosition3) || (val + 3 === destroyerPosition4) || (val + 3 === destroyerPosition5)) { return val } else { val = Math.floor(Math.random() * 99) } return val;
    };
    if (Orientation === 1) {
        if ((val + 1 > 99) || (val + 2 > 99) || (val + 3 > 99) || (val === [70 - 79]) || (val === [80 - 89]) || (val === [90 - 99]) || (val === destroyerPosition) || (val === destroyerPosition2) || (val === destroyerPosition3) || (val === destroyerPosition4) || (val === destroyerPosition5) || (val + 10 === destroyerPosition) || (val + 10 === destroyerPosition2) || (val + 10 === destroyerPosition3) || (val + 10 === destroyerPosition4) || (val + 10 === destroyerPosition5) || (val + 20 === destroyerPosition) || (val + 20 === destroyerPosition2) || (val + 20 === destroyerPosition3) || (val + 20 === destroyerPosition4) || (val + 20 === destroyerPosition5) || (val + 30 === destroyerPosition) || (val + 30 === destroyerPosition2) || (val + 30 === destroyerPosition3) || (val + 30 === destroyerPosition4) || (val + 30 === destroyerPosition5)) { return val } else { val = Math.floor(Math.random() * 99) } return val;
    };
};

function generateSubmarine() {
    let val = Math.floor(Math.random() * 99);
    if (Orientation === 0) {
        if ((val + 1 > 99) || (val + 2 > 99) || val === [8 - 9] || val === [18 - 19] || val === [28 - 29] || val === [38 - 39] || val === [48 - 49] || val === [58 - 59] || val === [68 - 69] || val === [78 - 79] || val === [88 - 89] || val === [98 - 99] || val === destroyerPosition || val === destroyerPosition2 || val === destroyerPosition3 || val === destroyerPosition4 || val === destroyerPosition5 || val === battleshipPosition || val === battleshipPosition2 || val === battleshipPosition3 || val === battleshipPosition4 || val + 1 === destroyerPosition || val + 1 === destroyerPosition2 || val + 1 === destroyerPosition3 || val + 1 === destroyerPosition4 || val + 1 === destroyerPosition5 || val + 1 === battleshipPosition || val + 1 === battleshipPosition2 || val + 1 === battleshipPosition3 || val + 1 === battleshipPosition4 || val + 2 === destroyerPosition || val + 2 === destroyerPosition2 || val + 2 === destroyerPosition3 || val + 2 === destroyerPosition4 || val + 2 === destroyerPosition5 || val + 2 === battleshipPosition || val + 2 === battleshipPosition2 || val + 2 === battleshipPosition3 || val + 2 === battleshipPosition4) { return val } else { val = Math.floor(Math.random() * 99) } return val;

    };
    if (Orientation === 1) {
        if (val + 1 > 99 || val + 2 > 99 || val === [80 - 89] || val === [90 - 99] || val === destroyerPosition || val === destroyerPosition2 || val === destroyerPosition3 || val === destroyerPosition4 || val === destroyerPosition5 || val === battleshipPosition || val === battleshipPosition2 || val === battleshipPosition3 || val === battleshipPosition4 || val + 10 === destroyerPosition || val + 10 === destroyerPosition2 || val + 10 === destroyerPosition3 || val + 10 === destroyerPosition4 || val + 10 === destroyerPosition5 || val + 10 === battleshipPosition || val + 10 === battleshipPosition2 || val + 10 === battleshipPosition3 || val + 10 === battleshipPosition4 || val + 20 === destroyerPosition || val + 20 === destroyerPosition2 || val + 20 === destroyerPosition3 || val + 20 === destroyerPosition4 || val + 20 === destroyerPosition5 || val + 20 === battleshipPosition || val + 20 === battleshipPosition2 || val + 20 === battleshipPosition3 || val + 20 === battleshipPosition4) { return val } else { val = Math.floor(Math.random() * 99) } return val;
    };
};

function generateSmallship() {
    let val = Math.floor(Math.random() * 99);
    if (Orientation === 0) {
        if (val + 1 > 99 || val === 9 || val === 19 || val === 29 || val === 39 || val === 49 || val === 59 || val === 69 || val === 79 || val === 89 || val === 99 || val === destroyerPosition || val === destroyerPosition2 || val === destroyerPosition3 || val === destroyerPosition4 || val === destroyerPosition5 || val === battleshipPosition || val === battleshipPosition2 || val === battleshipPosition3 || val === battleshipPosition4 || val === submarinePosition || val === submarinePosition2 || val === submarinePosition3 || val + 1 === destroyerPosition || val + 1 === destroyerPosition2 || val + 1 === destroyerPosition3 || val + 1 === destroyerPosition4 || val + 1 === destroyerPosition5 || val + 1 === battleshipPosition || val + 1 === battleshipPosition2 || val + 1 === battleshipPosition3 || val + 1 === battleshipPosition4 || val + 1 === submarinePosition || val + 1 === submarinePosition2 || val + 1 === submarinePosition3) { return val } else { val = Math.floor(Math.random() * 99) } return val;
    }
    if (Orientation === 1) {
        if (val + 1 > 99 || val === [90 - 99] || val === destroyerPosition || val === destroyerPosition2 || val === destroyerPosition3 || val === destroyerPosition4 || val === destroyerPosition5 || val === battleshipPosition || val === battleshipPosition2 || val === battleshipPosition3 || val === battleshipPosition4 || val === submarinePosition || val === submarinePosition2 || val === submarinePosition3 || val + 10 === destroyerPosition || val + 10 === destroyerPosition2 || val + 10 === destroyerPosition3 || val + 10 === destroyerPosition4 || val + 10 === destroyerPosition5 || val + 10 === battleshipPosition || val + 10 === battleshipPosition2 || val + 10 === battleshipPosition3 || val + 10 === battleshipPosition4 || val + 10 === submarinePosition || val + 10 === submarinePosition2 || val + 10 === submarinePosition3) { return val } else { val = Math.floor(Math.random() * 99) } return val;
    }
};

function randomCible() {
    randomShoot = Math.floor(Math.random() * 99);

    let cible = document.getElementById(randomShoot);
    //console.log(cible);

    while (cible.classList.contains('plouf') || cible.classList.contains('touche')) {
        randomShoot = Math.floor(Math.random() * 99);
        cible = document.getElementById(randomShoot);
    };
    if (cible.classList.contains('bateau-user')) {
        cible.classList.replace('bateau-user', 'touche');
        shipUserShot = shipUserShot + 1;
        console.log(shipUserShot)
        if (shipUserShot === 14) {
            alert("Tu as perdu !")
        }
    }
    else { cible.classList.replace('mer', 'plouf') };

};


function userShot(event) {
    let userShot = event.target;

    if (userShot.classList.contains('bateau-computer')) {
        userShot.classList.replace('bateau-computer', 'touche');
        shipComputerShot = shipComputerShot + 1;
        if (shipComputerShot === 14) {
            alert("Bravo tu as gagné !")
        }
        //console.log(shipComputerShot)
    }
    else { userShot.classList.replace('mer', 'plouf') };


}

//console.log(destroyerPosition, destroyerPosition2, destroyerPosition3, destroyerPosition4, destroyerPosition5);
//console.log(battleshipPosition, battleshipPosition2, battleshipPosition3, battleshipPosition4);
//console.log(submarinePosition, submarinePosition2, submarinePosition3);
//console.log(smallshipPosition, smallshipPosition2);
