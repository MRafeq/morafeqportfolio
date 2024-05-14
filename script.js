const gameBoard = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");

const width = 28;
const layout = [
  // Game board layout
  // '#' represents wall, '0' represents point, 'B' represents blank space
  // 'P' represents Pac-Man starting position, 'G' represents ghost starting position
  '#######################',
  '#000000000000000000000#',
  '#0#####0####0######0#',
  '#0#####0####0######0#',
  '#0#####0####0######0#',
  '#000000000000000000000#',
  '#0#################0#',
  '#0#################0#',
  '#000000000#0000000000#',
  '###0##0##0G###G##0###',
  '###0##0#########0###',
  '###0##0#########0###',
  '#00000000##000000000#',
  '#####0##############',
  '#####0##############',
  '#000000000##00000000#',
  '#0#################0#',
  '#0#################0#',
  '#0000000#####0000000#',
  '######0#####0#######',
  '######0#####0#######',
  '#0000000000000##0000#',
  '#0###########0##0###',
  '#0###########0##0###',
  '#0###########0##0###',
  '#0000000000000000000#',
  '###################'
];

let score = 0;

function createGrid() {
  for (let i = 0; i < layout.length; i++) {
    for (let j = 0; j < layout[i].length; j++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      if (layout[i][j] === "#") {
        tile.classList.add("wall");
      } else if (layout[i][j] === "0") {
        tile.classList.add("point");
      } else if (layout[i][j] === "P") {
        tile.classList.add("pacman");
      } else if (layout[i][j] === "G") {
        tile.classList.add("ghost");
      }
      gameBoard.appendChild(tile);
    }
  }
}

function movePacman(event) {
  const pacman = document.querySelector(".pacman");
  const pacmanIndex = getIndex(pacman);

  const directions = {
    37: -1, // Left arrow key
    38: -width, // Up arrow key
    39: 1, // Right arrow key
    40: width // Down arrow key
  };

  const direction = directions[event.keyCode];

  if (!direction || gameBoard.childNodes[pacmanIndex + direction].classList.contains("wall")) {
    return;
  }

  pacman.style.transform = `rotate(${getRotationAngle(event.keyCode)}deg)`;

  if (gameBoard.childNodes[pacmanIndex + direction].classList.contains("point")) {
    gameBoard.childNodes[pacmanIndex + direction].classList.remove("point");
    score += 10;
    scoreDisplay.textContent = "Score: " + score;
  }

  gameBoard.childNodes[pacmanIndex].classList.remove("pacman");
  gameBoard.childNodes[pacmanIndex + direction].classList.add("pacman");
}

function getRotationAngle(keyCode) {
  const rotationAngles = {
    37: 180, // Left arrow key
    38: 270, // Up arrow key
    39: 0, // Right arrow key
    40: 90 // Down arrow key
  };

  return rotationAngles[keyCode];
}

function getIndex(element) {
  const nodes = Array.from(gameBoard.childNodes);
  return nodes.indexOf(element);
}

function startPacManGame() {
  createGrid();
  const pacman = document.querySelector(".pacman");
  document.addEventListener("keydown", movePacman);
  pacman.focus();
}

startPacManGame();
