class Game {
  constructor() {
    this.opponents = [];
    this.score = 0;
    this.lives = 5;
  }

  timer() {
    const minutesLabel = document.getElementById("minutes");
    const secondsLabel = document.getElementById("seconds");
    let totalSeconds = 0;
    this.timerID = setInterval(setTime, 1000);

    function setTime() {
      ++totalSeconds;
      secondsLabel.innerHTML = pad(totalSeconds % 60);
      minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }

    function pad(value) {
      let valueString = value + "";
      if (valueString.length < 2) {
        return "0" + valueString;
      } else {
        return valueString;
      }
    }
  }

  lifeDown() {
    if (this.lives === 1) {
      this.opponents.forEach(opp => opp.shouldMove = false);
      this.gameOver();
    } else {
      this.lives -= 1;
    }
  }

  scoreUp() {
    this.score += 1;
  }

  scoreRender() {
    const score = document.querySelector("#score-value");
    score.innerHTML = this.score;
  }

  gameOver() {
    const modalBackground = document.querySelector("#background");
    modalBackground.style.visibility = "visible";
    const modalContainer = document.querySelector("#modal-container");
    modalContainer.style.visibility = "visible";
    clearInterval(this.timerID);
    this.opponents.forEach(opp => clearInterval(opp.opponentMovement));
  }

  init() {
    this.gameWalls = new WallsContainer();
    this.gameWalls.init();

    let opponentOne = new Opponent(
      this.gameWalls,
      "opponentOne",
      this.lifeDown.bind(this)
    );
    this.opponents.push(opponentOne);
    opponentOne.init();
    // let opponentTwo = new Opponent(this.gameWalls, "opponentTwo");
    // this.opponents.push(opponentTwo);
    // opponentTwo.init();
    // let opponentThree = new Opponent(this.gameWalls, "opponentThree");
    // this.opponents.push(opponentThree);
    // opponentThree.init();

    this.gamePoint = new GamePoint(this.gameWalls);
    this.gamePoint.init();

    this.player = new Player(
      this.gameWalls,
      this.lifeDown.bind(this),
      this.scoreUp.bind(this),
      this.scoreRender.bind(this),
      this.opponents[0],
      this.gamePoint
    );
    this.player.init();
    this.player.setPointPosition(this.gamePoint);
    this.opponents.forEach(opponent => opponent.setPlayer(this.player));

    this.timer();
  }
}

var game = new Game();
game.scoreRender();
game.init();
