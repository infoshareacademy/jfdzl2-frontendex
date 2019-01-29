class Game {
  constructor() {
    this.opponents = [];
    this.score = 0;
    this.lives = 3;
  }

  timer() {
    const minutesLabel = document.getElementById("minutes");
    const secondsLabel = document.getElementById("seconds");
    let totalSeconds = 0;
    setInterval(setTime, 1000);

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
    this.lives -= 1;
    console.log("you lost one life");
  }

  scoreUp() {
    this.score += 1;
    console.log("you scored a point");
  }

  scoreRender() {
    const score = document.querySelector("#score-value");
    score.innerHTML = this.score;
  }

  init() {
    this.gameWalls = new WallsContainer();
    this.gameWalls.init();

    let opponentOne = new Opponent(this.gameWalls, "opponentOne");
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
      this.gamePoint,
    );
    this.player.init();
    this.player.setPointPosition(this.gamePoint);

    this.timer();
  }
}

var game = new Game();
game.scoreRender();
game.init();
