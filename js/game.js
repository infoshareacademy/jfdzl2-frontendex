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

  init() {
      
  }
}

var game = new Game();
game.timer();
