class Opponent {
  constructor(walls, id) {
    this.walls = walls;
    this.size = 20;
    this.position = { x: 0, y: 0 };
    this.id = id;
  }

  getRandomNumbers() {
    return Math.floor(Math.random() * 20);
  }

  checkOpponentWallsCollision(x, y) {
    const filteredWalls = this.walls.walls.filter(wall => {
      return wall.position.x === x && wall.position.y === y;
    });

    const isMatch = filteredWalls.length > 0;
    return isMatch;
  }

  setRandomPosition() {
    const x = this.getRandomNumbers();
    const y = this.getRandomNumbers();
    if (this.checkOpponentWallsCollision(x, y)) {
      this.setRandomPosition();

      return false;
    }

    this.position.x = x;
    this.position.y = y;
  }

  opponentRender() {
    const opponentDOM = document.createElement("div");
    const boardDOM = document.querySelector(".board");

    opponentDOM.classList.add("opponent");
    opponentDOM.setAttribute("id", this.id);
    opponentDOM.style.left = this.position.x * 5 + "%";
    opponentDOM.style.top = this.position.y * 5 + "%";

    const existingOpponent = document.getElementById(this.id);
    if (existingOpponent) {
      boardDOM.removeChild(existingOpponent);
    }
    boardDOM.appendChild(opponentDOM);
  }

  randomMovement() {
    const chooseAxisToMove = Math.random() > 0.5;

    if (chooseAxisToMove) {
      let newX = Math.floor(Math.random() * 3 + -1) + this.position.x;
      while (
        newX >= 19 ||
        newX <= 0 ||
        this.checkOpponentWallsCollision(newX, this.position.y)
      ) {
        let randomValue = Math.floor(Math.random() * 3 + -1);
        newX = randomValue + this.position.x;
      }
      this.position.x = newX;
    } else {
      let newY = Math.floor(Math.random() * 3 + -1) + this.position.y;
      while (
        newY >= 19 ||
        newY <= 0 ||
        this.checkOpponentWallsCollision(this.position.x, newY)
      ) {
        newY = Math.floor(Math.random() * 3 + -1) + this.position.y;
      }
      this.position.y = newY;
    }

    this.opponentRender();
  }

  init() {
    this.setRandomPosition();
    this.opponentRender();

    setInterval(() => this.randomMovement(), 500);
  }
}
