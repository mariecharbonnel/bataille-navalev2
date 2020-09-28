const userGrid = document.getElementById('grid-user');
const placeButton = document.getElementById('place-ok');
const computerGrid = document.getElementById('grid-computer');
const size = 10;
const userSquares = [];
const computerSquares = [];
let shipUserSquares = 0;
let shipComputerSquares = 0;

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

generateShips();

//console.log(Orientation);



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
    event.target.classList.replace('mer', 'bateau-user');
    shipUserSquares = shipUserSquares + 1;
    if(shipUserSquares===1){
    alert("Sélectionne 5 cases consécutives pour placer ton porte-avion");};

    if(shipUserSquares===5){
    alert("Sélectionne 4 cases consécutives pour placer ton croiseur")};

    if(shipUserSquares===9){
        alert("Sélectionne 3 cases consécutives pour placer ton sous-marin");
    };

    if(shipUserSquares===12){
        alert("Sélectionne 2 cases consécutives pour placer ton torpilleur");
    }

    if(shipUserSquares>=14){
        alert("Bravo ta flotte est placée !")
        userGrid.removeEventListener('click', apercu);
    }
    console.log(shipUserSquares)
};

userGrid.addEventListener('click', apercu);
//console.log(shipUserSquares);

placeButton.addEventListener('click', (event) => {
    userGrid.removeEventListener('click', apercu);
});


//creation grille computer
createComputerBoard(computerGrid, computerSquares, size);

function createUserBoard(grid, squares, size) {

    for (let cote = 0; cote < size * size; cote++) {
        const square = document.createElement('div');
        square.classList.add('mer');
        square.classList.add('grille');
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
        square.id = cote;
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

function generateRandom() {
    return Math.floor(Math.random() * 95);
};

function generateDestroyer() {
    let val = Math.floor(Math.random() * 95);
    if (Orientation === 0) {
       return (val >= 5 && val <= 9 || val >= 15 && val <= 19 || val >= 25 && val <= 29 || val >= 35 && val <= 39 || val >= 45 && val <= 49 || val >= 55 && val <= 59 || val >= 65 && val <= 69 || val >= 75 && val <= 79 || val >= 85 && val <= 89 || val >= 95 && val <= 99) ? generateDestroyer() : val;
    };
    if (Orientation === 1) {
        return (val >= 60 && val <= 69 || val >= 70 && val <= 79 || val >= 80 && val <= 89 || val >= 90 && val <= 99) ? generateDestroyer() : val;
    };
};

function generateBattleship() {
    let val = Math.floor(Math.random() * 95);
    if (Orientation === 0) {
       return (val >= 6 && val <= 9 || val >= 16 && val <= 19 || val >= 26 && val <= 29 || val >= 36 && val <= 39 || val >= 46 && val <= 49 || val >= 56 && val <= 59 || val >= 66 && val <= 69 || val >= 76 && val <= 79 || val >= 86 && val <= 89 || val >= 96 && val <= 99 || val === destroyerPosition || val === destroyerPosition2 || val === destroyerPosition3 || val === destroyerPosition4 || val === destroyerPosition5 || val + 1 === destroyerPosition || val + 1 === destroyerPosition2 || val + 1 === destroyerPosition3 || val + 1 === destroyerPosition4 || val + 1 === destroyerPosition5 || val + 2 === destroyerPosition || val + 2 === destroyerPosition2 || val + 2 === destroyerPosition3 || val + 2 === destroyerPosition4 || val + 2 === destroyerPosition5 || val + 3 === destroyerPosition || val + 3 === destroyerPosition2 || val + 3 === destroyerPosition3 || val + 3 === destroyerPosition4 || val + 3 === destroyerPosition5) ? generateBattleship() : val;
    };
    if (Orientation === 1) {
        return (val >= 70 && val <= 79 || val >= 80 && val <= 89 || val >= 90 && val <= 99 || val === destroyerPosition || val === destroyerPosition2 || val === destroyerPosition3 || val === destroyerPosition4 || val === destroyerPosition5 || val + 10 === destroyerPosition || val + 10 === destroyerPosition2 || val + 10 === destroyerPosition3 || val + 10 === destroyerPosition4 || val + 10 === destroyerPosition5 || val + 20 === destroyerPosition || val + 20 === destroyerPosition2 || val + 20 === destroyerPosition3 || val + 20 === destroyerPosition4 || val + 20 === destroyerPosition5 || val + 30 === destroyerPosition || val + 30 === destroyerPosition2 || val + 30 === destroyerPosition3 || val + 30 === destroyerPosition4 || val + 30 === destroyerPosition5) ? generateBattleship() : val;
    };
};

function generateSubmarine() {
    let val = Math.floor(Math.random() * 95);
    if (Orientation === 0) {
        return (val >= 8 && val <= 9 || val >= 18 && val <= 19 || val >= 28 && val <= 29 || val >= 38 && val <= 39 || val >= 48 && val <= 49 || val >= 58 && val <= 59 || val >= 68 && val <= 69 || val >= 78 && val <= 79 || val >= 88 && val <= 89 || val >= 98 && val <= 99 || val === destroyerPosition || val === destroyerPosition2 || val === destroyerPosition3 || val === destroyerPosition4 || val === destroyerPosition5 || val === battleshipPosition || val === battleshipPosition2 || val === battleshipPosition3 || val === battleshipPosition4|| val + 1 === destroyerPosition || val  + 1 === destroyerPosition2 || val + 1 === destroyerPosition3 || val + 1 === destroyerPosition4 || val + 1 === destroyerPosition5 || val + 1 === battleshipPosition || val  + 1 === battleshipPosition2 || val + 1 === battleshipPosition3 || val + 1 === battleshipPosition4 || val + 2 === destroyerPosition || val + 2 === destroyerPosition2 || val + 2 === destroyerPosition3 || val + 2 === destroyerPosition4 || val + 2 === destroyerPosition5 || val + 2 === battleshipPosition || val + 2 === battleshipPosition2 || val + 2 === battleshipPosition3 || val + 2 === battleshipPosition4) ? generateDestroyer() : val;
        
    };
    if (Orientation === 1) {
        return (val >= 80 && val <= 89 || val >= 90 && val <= 99 || val === destroyerPosition || val === destroyerPosition2 || val === destroyerPosition3 || val === destroyerPosition4 || val === destroyerPosition5 || val === battleshipPosition || val === battleshipPosition2 || val === battleshipPosition3 || val === battleshipPosition4 || val + 10 === destroyerPosition || val  + 10 === destroyerPosition2 || val + 10 === destroyerPosition3 || val + 10 === destroyerPosition4 || val + 10 === destroyerPosition5 || val + 10 === battleshipPosition || val  + 10 === battleshipPosition2 || val + 10 === battleshipPosition3 || val + 10 === battleshipPosition4 || val + 20 === destroyerPosition || val + 20 === destroyerPosition2 || val + 20 === destroyerPosition3 || val + 20 === destroyerPosition4 || val + 20 === destroyerPosition5 || val + 20 === battleshipPosition || val + 20 === battleshipPosition2 || val + 20 === battleshipPosition3 || val + 20 === battleshipPosition4) ? generateSubmarine() : val;
    };
}

function generateSmallship() {
    let val = Math.floor(Math.random() * 95);
    //console.log(val)
    if (Orientation === 0) {
       return (val === 9 || val === 19 || val === 29 || val === 39 || val === 49 || val === 59 || val === 69 || val === 79 || val === 89 || val === 99 || val === destroyerPosition || val === destroyerPosition2 || val === destroyerPosition3 || val === destroyerPosition4 || val === destroyerPosition5 || val === battleshipPosition || val === battleshipPosition2 || val === battleshipPosition3 || val === battleshipPosition4 || val === submarinePosition || val === submarinePosition2 || val === submarinePosition3 || val + 1 === destroyerPosition || val + 1 === destroyerPosition2 || val + 1 === destroyerPosition3 || val + 1 === destroyerPosition4 || val + 1 === destroyerPosition5 || val + 1 === battleshipPosition || val + 1 === battleshipPosition2 || val + 1 === battleshipPosition3 || val + 1 === battleshipPosition4 || val + 1 === submarinePosition || val + 1 === submarinePosition2 || val + 1 === submarinePosition3) ? generateSmallship() : val;
    }
    if (Orientation === 1) {
        return (val >= 90 && val <= 99 || val === destroyerPosition || val === destroyerPosition2 || val === destroyerPosition3 || val === destroyerPosition4 || val === destroyerPosition5 || val === battleshipPosition || val === battleshipPosition2 || val === battleshipPosition3 || val === battleshipPosition4 || val === submarinePosition || val === submarinePosition2 || val === submarinePosition3|| val + 10 === destroyerPosition || val + 10 === destroyerPosition2 || val + 10 === destroyerPosition3 || val + 10 === destroyerPosition4 || val + 10 === destroyerPosition5 || val + 10 === battleshipPosition || val + 10 === battleshipPosition2 || val + 10 === battleshipPosition3 || val + 10 === battleshipPosition4 || val + 10 === submarinePosition || val + 10 === submarinePosition2 || val + 10 === submarinePosition3) ? generateSmallship() : val;
    }    
}

function tirs() {
    let shot = Math.floor(Math.random() * 99);

}
//console.log(destroyerPosition, destroyerPosition2, destroyerPosition3, destroyerPosition4, destroyerPosition5);
//console.log(battleshipPosition, battleshipPosition2, battleshipPosition3, battleshipPosition4);
//console.log(submarinePosition, submarinePosition2, submarinePosition3);
//console.log(smallshipPosition, smallshipPosition2);
//userSquares.addEventListener('mousemove', ()=> {apercu})


/*global.utils = {
    CELL_SIZE: 60,
    // retourne la position (démarre à 1) du noeud passé en paramètre dans son parent
    eq: function (node) {
        var p = node.parentNode;
        var i = 0;
        var nbChildren = p.children.length;
        var c = p.children[i];
        //tant que tous les bateaux ne sont pas placés
        while (c !== node && i < nbChildren) {
            i += 1;
            c = p.children[i];
        }
        if (c === node) {
            return i;
        } else {
            return null;
        }
    },
    // créer un tableau à deux dimension, chaque élément du tableau est définie à la valeur (optionelle) "value" (vaut 0 par défaut)
    createGrid: function (lines, columns, value) {
        var val = value !== undefined
            ? value
            : 0;
        var i = 0;
        var j;
        var grid = [];
        while (i < lines) {
            grid[i] = [];
            j = 0;
            while (j < columns) {
                grid[i][j] = val;
                j += 1;
            }
            i += 1;
        }
        return grid;
    }}

UserGrid.addEventListener('mousemove', ()=>{apercu();} );

function apercu () {
    this.dom = document.createElement('div');
    this.dom.style.height = "" + utils.CELL_SIZE + "px";
    this.dom.style.width = "" + utils.CELL_SIZE * this.life + "px";
    this.dom.style.position = "relative";
    this.dom.style.opacity = "0.8";
    this.dom.style.backgroundColor = this.color;

}

function getShipNewIndex() {
  shipAI = shipAI + 1;
  return shipAI;
}

Ship = {
  life: null,
  color: null,
  name: null,
  id: null,
  dom: null,
  setName: function (name) {
    this.name = name;
  },
  getName: function () {
    return this.name;
  },
  setLife: function (life) {
    this.life = parseInt(life, 10);
  },
  getLife: function () {
    return this.life;
  },
  setColor: function (color) {
    this.color = color;
  },
  getColor: function () {
    return this.color;
  },
  getId: function () {
    return this.id;
  },
  init: function () {
    this.id = getShipNewIndex();

    this.dom = document.createElement('div');
    this.dom.style.height = "" + utils.CELL_SIZE + "px";
    this.dom.style.width = "" + utils.CELL_SIZE * this.life + "px";
    this.dom.style.position = "relative";
    this.dom.style.opacity = "0.8";
    this.dom.style.backgroundColor = this.color;
  }
};

shipFactory = {
  TYPE_BATTLESHIP: 'battleship',
  TYPE_DESTROYER: 'destroyer',
  TYPE_SUBMARINE: 'submarine',
  TYPE_SMALL_SHIP: 'small-ship',

  build: function (type, name) {

    if (!refType[type]) {
      return null;
    }

    var newShip = _.assign({}, Ship, refType[type]);

    newShip.init();

    if (name !== undefined) {
      newShip.setName(name);
    }

    return newShip;
  },

};


refType[shipFactory.TYPE_BATTLESHIP] = {
  life: 5,
  name: "Battleship",
  color: "#e60019"
};
refType[shipFactory.TYPE_DESTROYER] = {
  life: 5,
  name: "Destroyer",
  color: "#577cc2"
};
refType[shipFactory.TYPE_SUBMARINE] = {
  life: 4,
  name: "Submarine",
  color: "#56988c"
};
refType[shipFactory.TYPE_SMALL_SHIP] = {
  life: 3,
  name: "small-ship",
  color: "#203140"
};

(function (global) {
  "use strict";

  var ship = {dom: {parentNode: {removeChild: function () {}}}};

  var player = {
      grid: [],
      tries: [],
      fleet: [],
      nextTries: [],
      role: 0,
      gameOver: 0,
      game: null,
      activeShip: 0,
      orientation: 'Horizontale',
      init: function () {
          // créé la flotte
          this.fleet.push(shipFactory.build(shipFactory.TYPE_BATTLESHIP));
          this.fleet.push(shipFactory.build(shipFactory.TYPE_DESTROYER));
          this.fleet.push(shipFactory.build(shipFactory.TYPE_SUBMARINE));
          this.fleet.push(shipFactory.build(shipFactory.TYPE_SMALL_SHIP));
          this.fleetKilled = utils.createGrid(10, 10);
          // créé les grilles
          this.grid = utils.createGrid(10, 10);
          this.tries = utils.createGrid(10, 10);
          this.nextTries = [0, 0];
      },
      play: function (col, line) {
          // appel la fonction fire du game, et lui passe une calback pour récupérer le résultat du tir
          this.game.fire(this, col, line, _.bind(function (hasSucced) {
              this.tries[line][col] = hasSucced;
          }, this));
          console.log(this.tries);
      },
      // quand il est attaqué le joueur doit dire si il a un bateaux ou non à l'emplacement choisi par l'adversaire
      receiveAttack: function (col, line, callback) {
          var succeed = false;

          if (this.grid[line][col] !== 0 || this.grid[line][col] === null) {
              succeed = true;
//                this.grid[line][col] = null;
          }
          callback.call(undefined, succeed);
      },
      randomShot: function() {
          var e = true;
          while(e) {
              var x = this.randomPos();
              var y = this.randomPos();
              if(this.tries[x][y] === 0) {
                  this.nextTries = [x, y];
                  this.nextTries[0] = x;
                  this.nextTries[1] = y;
                  e = false;
              }
          }
      },
      logicShot: function() {
          var i = 0;
          for(var x=0; x<10; x++) {
              for(var y=0;y<10;y++) {
                  if(this.tries[x][y] === true) {
                      console.log('here');
                      if (x < 9 && this.tries[x+1][y] === true)  {
                           i=2;
                           while(x+i <= 9 && this.tries[x+i][y] === true) {
                               i++;
                          }
                          if(x+i < 9 && this.tries[x+i][y] === 0) {
                              this.nextTries = [x+i, y];
                              return true;
                          }
                      }
                      if (x > 0 && this.tries[x-1][y] === true) {
                          i=2;
                          while(x-i > 0 && this.tries[x-i][y] === true) {
                              i++;
                          }
                          if(x-i >= 0 && this.tries[x-i][y] === 0) {
                              this.nextTries = [x-i, y];
                              return true;
                          } else {
                              for(i=-1;x+i <= 9 && this.tries[x+i][y] !== 0;i++) {
                                  this.tries[x+i][y] = false;
                              }
                          }
                      }
                      if (y < 9 && this.tries[x][y+1] === true) {
                          i=2;
                          while(y+i < 9 && this.tries[x][y+i] === true) {
                              i++;
                          }
                          if(y+i <= 9 && this.tries[x][y+i] === 0) {
                              this.nextTries = [x, y+i];
                              return true;
                          }
                      }
                      if (y > 0 && this.tries[x][y-1] === true) {
                          i=2;
                          while(y-i > 0 && this.tries[x][y-i] === true) {
                              i++;
                          }
                          if(y-i >= 0 && this.tries[x][y-i] === 0) {
                              this.nextTries = [x, y-i];
                              return true;
                          } else {
                              for(i=-1;y+i <= 9 && this.tries[x][y+i] !== 0;i++) {
                                  this.tries[x][y+i] = false;
                              }
                          }
                      }
                  }
              }
          }
          for(var x=0; x<10; x++) {
              for(var y=0;y<10;y++) {
                  if(this.tries[x][y] === true) {
                      i=0;
                      while (i === 0) {
                          if((Math.random()*10) > 7 && x<9 && this.tries[x][y] !== false && (this.tries[x+1][y] !== true && this.tries[x+1][y] !== false)) {
                              this.nextTries = [++x, y];
                              return true;
                          } else if((Math.random()*10) > 7 && x>0 && this.tries[x][y] !== false  && (this.tries[x-1][y] !== true && this.tries[x-1][y] !== false)) {
                              this.nextTries = [--x, y];
                              return true;
                          } else if((Math.random()*10) > 7 && y<9 && this.tries[x][y] !== false && (this.tries[x][y+1] !== true && this.tries[x][y+1] !== false)) {
                              this.nextTries = [x, ++y];
                              return true;
                          } else if((Math.random()*10) > 7 && y>0 && this.tries[x][y] !== false && (this.tries[x][y-1] !== true && this.tries[x][y-1] !== false)) {
                              this.nextTries = [x, --y];
                              return true;
                          } else if((x == 9 || (this.tries[x+1][y] === true || this.tries[x+1][y] === false))
                          && (x == 0 || (this.tries[x-1][y] === true || this.tries[x-1][y] === false))
                          && (y == 9 || (this.tries[x][y+1] === true || this.tries[x][y+1] === false))
                          && (y == 0 || (this.tries[x][y-1] === true || this.tries[x][y-1] === false))) {
                              i = 1;
                          }
                      }
                  }
              }
          }
          this.randomShot();
      },
      randomPos: function() {
          return Math.floor(Math.random() * 10);
      },

      // updateGrid: function(id) {
      //     if(id = 8){var e = 4;}
      //     if(id = 7){var e = 5;}
      //     else { var e = 6;}
      //     for(var i = 1;i<e;i++){
      //         var x = this.fleetKilled[id][i][0];
      //         var y = this.fleetKilled[id][i][1];
      //         this.tries[y][x] = false;
      //     }

      // },
      setActiveShipPosition: function (x, y) {
          var ship = this.fleet[this.activeShip];
          var i = 0;
          while (i < ship.getLife()) {
              if(ship.getId() === 4) {
                  this.grid[y][x - 1 + i] = ship.getId();
              } else {
                  this.grid[y][x - 2 + i] = ship.getId();
              }
              i += 1;
          }
          return true;
      },
      setActiveShipPositionRight: function (x, y) {
          var ship = this.fleet[this.activeShip];
          var i = 0;
          while (i < ship.getLife()) {
              if(ship.getId() > 2) {
                  this.grid[y-1+i][x] = ship.getId();
              } else {
                  this.grid[y-2+i][x] = ship.getId();
              }
              i += 1;
          }
          return true;
      },
      verifShipPosition: function(x, y) {
          var ship = this.fleet[this.activeShip];
          var i = 0;
          while (i < ship.getLife()) {
              if(ship.getId() === 4) {
                  if(this.grid[y][x-1+i] !== 0) {return false;}
              } else {
                  if(this.grid[y][x-2+i] !== 0) {return false;}
              }
              i += 1;
          }
          return true;
      },
      verifShipPositionRight: function(x, y) {
          var ship = this.fleet[this.activeShip];
          var i = 0;
          while (i < ship.getLife()) {
              if(ship.getId() > 2) {
                  if((y-1+i < 0) || (y-1+i > 9) || this.grid[y-1+i][x] !== 0) {return false;}
              } else {
                  if((y-2+i < 0) || (y-2+i > 9) || this.grid[y-2+i][x] !== 0) {return false;}
              }
              i += 1;
          }

          return true;
      },
      clearPreview: function () {
          this.fleet.forEach(function (ship) {
              if (ship.dom.parentNode) {
                  ship.dom.parentNode.removeChild(ship.dom);
              }
          });
      },
      resetShipPlacement: function () {
          this.clearPreview();

          this.activeShip = 0;
          this.grid = utils.createGrid(10, 10);
      },
      activateNextShip: function () {
          if (this.activeShip < this.fleet.length - 1) {
              this.activeShip += 1;
              return true;
          } else {
              return false;
          }
      },
      renderTries: function (grid) {
          this.tries.forEach(function (row, rid) {
              row.forEach(function (val, col) {
                  var node = grid.querySelector('.row:nth-child(' + (rid + 1) + ') .cell:nth-child(' + (col + 1) + ')');

                  if (val === true) {
                      node.style.backgroundColor = '#e60019';
                  } else if (val === false) {
                      node.style.backgroundColor = '#aeaeae';
                  }
              });
          });
      },
      renderShips: function (grid) {
      },
      setGame: function(obj) {
         this.game = obj;
      },
  };

  global.player = player;

}(this));
/*document.addEventListener('DOMContentLoaded', () => {
  const userGrid = document.querySelector('.grid-user');
  const computerGrid = document.querySelector('.grid-computer');
  const userSquares = [];
  const computerSquares = [];
  const width = 10;

  //creation grille utilisateur
  createBoards(userGrid, userSquares, width);

  // creation ordinateur
  createBoards(computerGrid, computerSquares, width);

  //Creation Grille
  function createBoards(grid, squares, width) {

    for (let cote = 0; cote < width * width; cote++) {
      const square = document.createElement('div');
      square.classList.add("mer");
      square.dataset.id = cote;
      grid.appendChild(square);
      squares.push(square);
    }

    userSquares.addEventListener('click', () => {
      toggle()
    })

    function toggle() {
      console.log(userSquares)
      userSquares.classList.remove("mer");
      userSquares.classList.add("bateau");
    }
  }
})



/*$( function() {
   $( ".grid" ).on( "click", function() {
     $( ".mer" ).toggleClass( ".bateau", 1000);
   });
 } );*/