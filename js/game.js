class Game {
  constructor() {}

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
    console.log("you lost life");
  }

  scoreUp() {
   //zdobycie punktu
  }

  init() {
    this.gameWalls = new WallsContainer();
    this.gameWalls.init();

    

    this.gamePoint = new GamePoint(this.gameWalls);
    this.gamePoint.init();

    this.player = new Player(this.gameWalls, this.lifeDown.bind(this));
    this.player.init();
    this.player.setPointPosition(this.gamePoint)
    
    this.timer()
  }
}

var game = new Game();
game.init()


