const Player = (sign) => {
  const getSign = () => sign;

  return { getSign };
};

const gameBoard = (() => {
  const gameboard = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => {
    return gameboard;
  };

  const getIndex = (i) => {
    return gameboard[i];
  };

  const setIndex = (sign, index) => {
    if (index > gameboard.length) return "Error";
    gameboard[index] = sign;
  };

  const reset = () => {
    for (let i = 0; i < gameboard.length; i++) {
      gameboard[i] = "";
    }
  };

  return { getBoard, getIndex, setIndex, reset };
})();

const display = (() => {
  const fileds = document.querySelectorAll(".field");
  const playerWin = document.querySelector(".player");
  const playerTurn = document.querySelector(".turn");
  const restartBtn = document.querySelector("#restart");

  fileds.forEach((field) =>
    field.addEventListener("click", (e) => {
      if (gameController.getOver() || gameController.getRound() === 9) return;
      if (e.target.innerText !== "") return;

      const index = e.target.dataset.index;
      const sign = gameController.getPlayerTurn();
      const reverseSign = gameController.getReversPlayerTurn();

      gameBoard.setIndex(sign, index);
      gameController.playGame(sign, e.target, reverseSign, playerTurn, playerWin, index);
    })
  );

  restartBtn.addEventListener("click", () => {
    fileds.forEach((field) => (field.innerText = ""));
    gameController.resetGame();
    gameBoard.reset();
    playerWin.innerText = "Player Turn:";
    events.drawSign("X", playerTurn);
    events.changeClass("X", playerTurn);
  });
})();

const gameController = (() => {
  let round = 0;
  let isOver = false;
  const player1 = Player("X");
  const player2 = Player("O");

  const getPlayerTurn = () => {
    return round % 2 === 1 ? player2.getSign() : player1.getSign();
  };

  const getReversPlayerTurn = () => {
    return round % 2 === 1 ? player1.getSign() : player2.getSign();
  };

  const playGame = (sign, target, reverseSign, targetTurn, playerWin, index) => {
    // Draw X and O in the gameboard
    events.drawSign(sign, target);
    events.changeClass(sign, target);

    if (winner(+index)) {
      isOver = true;
      playerWin.innerText = "The winner is";
      events.drawSign(sign, playerTurn);
      events.changeClass(sign, playerTurn);
      return;
    }

    // Change player turn
    events.drawSign(reverseSign, targetTurn);
    events.changeClass(reverseSign, targetTurn);

    round++;

    if (round === 9) {
      events.drawSign("!", targetTurn);
      events.drawSign("It's a draw", playerWin);
      return;
    }
  };

  const winner = (index) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return win
      .filter((array) => array.includes(index))
      .some((combination) =>
        combination.every((sign) => gameBoard.getIndex(sign) === getPlayerTurn())
      );
  };

  const resetGame = () => {
    round = 0;
    isOver = false;
  };

  const getRound = () => round;
  const getOver = () => isOver;

  return { getOver, getRound, playGame, resetGame, getPlayerTurn, getReversPlayerTurn };
})();

const events = (() => {
  const drawSign = (sign, target) => {
    target.innerText = sign;
  };

  const changeClass = (sign, target) => {
    let addClass;
    let removeClass;

    if (sign === "X") {
      removeClass = "o";
      addClass = "x";
    } else {
      removeClass = "x";
      addClass = "o";
    }

    target.classList.remove(removeClass);
    target.classList.add(addClass);
  };

  return { drawSign, changeClass };
})();
