let box11 = document.getElementById("r1-1");
let box12 = document.getElementById("r1-2");
let box13 = document.getElementById("r1-3");

let box21 = document.getElementById("r2-1");
let box22 = document.getElementById("r2-2");
let box23 = document.getElementById("r2-3");

let box31 = document.getElementById("r3-1");
let box32 = document.getElementById("r3-2");
let box33 = document.getElementById("r3-3");

let player_1_Score = document.getElementById("player-1");
let player_2_Score = document.getElementById("player-2");

let winLine = document.getElementById("win-lines");

let showMessage = document.getElementById("alert-message");
let messageHtml = document.getElementById("message");

const boxes = [box11, box12, box13, box21, box22, box23, box31, box32, box33];
const winCriteria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let player_1_ScoreValue = 0;
let player_2_ScoreValue = 0;

let player1 = true;
let playGround = 0;

const updateSore = () => {
  player_1_Score.innerHTML = player_1_ScoreValue;
  player_2_Score.innerHTML = player_2_ScoreValue;
};

const turn = () => {
  if (player1) {
    document.getElementById("playerX").classList.add("turn");
    document.getElementById("playerO").classList.remove("turn");
  } else {
    document.getElementById("playerO").classList.add("turn");
    document.getElementById("playerX").classList.remove("turn");
  }
};

const checkDraw = () => (playGround === 9 ? 1 : 0);

const clearPlayground = () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
  playGround = 0;
  winLine.className = "win-lines";
  showMessage.style.display = "none";
};

const reset = () => {
  clearPlayground();
  player_1_Score.innerHTML = 0;
  player_2_Score.innerHTML = 0;
};

const makeMessage = (message) => {
  messageHtml.innerHTML = message;
};

const drawWinLine = (index) => {
  switch (index) {
    case 0:
      winLine.classList.add("hor-1");
      break;
    case 1:
      winLine.classList.add("hor-2");
      break;
    case 2:
      winLine.classList.add("hor-3");
      break;
    case 3:
      winLine.classList.add("ver-1");
      break;
    case 4:
      winLine.classList.add("ver-2");
      break;
    case 5:
      winLine.classList.add("ver-3");
      break;
    case 6:
      winLine.classList.add("cross-1");
      break;
    case 7:
      winLine.classList.add("cross-2");
      break;
  }

  showMessage.style.display = "inline";
};

const checkWin = () => {
  if (!checkDraw()) {
    winCriteria.forEach((win, index) => {
      if (
        boxes[win[0]].innerHTML === boxes[win[1]].innerHTML &&
        boxes[win[2]].innerHTML === "X" &&
        boxes[win[0]].innerHTML === boxes[win[2]].innerHTML
      ) {
        drawWinLine(index);

        makeMessage("Player X Wins");

        player_1_ScoreValue++;

        updateSore();

        setTimeout(() => {
          clearPlayground();
        }, 1300);
      } else if (
        boxes[win[0]].innerHTML === boxes[win[1]].innerHTML &&
        boxes[win[2]].innerHTML === "O" &&
        boxes[win[0]].innerHTML === boxes[win[2]].innerHTML
      ) {
        drawWinLine(index);

        makeMessage("Player O Wins");

        player_2_ScoreValue++;

        updateSore();

        setTimeout(() => {
          clearPlayground();
        }, 1300);
      }
    });
  } else {
    makeMessage("DRAW !!!");
    showMessage.style.display = "inline";
    setTimeout(() => {
      clearPlayground();
    }, 1300);
  }
};

reset();
turn();

const play = (box) => {
  if (boxes[box].innerHTML === "") {
    player1 ? (boxes[box].innerHTML = "X") : (boxes[box].innerHTML = "O");
    player1 = !player1;
    playGround++;
  }

  turn();
  checkWin();
};
