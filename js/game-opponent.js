class Opponent {
  constructor(walls, id) {
    this.walls = walls;
    this.size = 20;
    this.position = { x: 0, y: 0 };
    this.id = id;
  }

  getOpponentPosition() {
    return this.position;
  }

  setRandomPosition() {
    const x = Helper.getRandomNumbers();
    const y = Helper.getRandomNumbers();
    if (Helper.checkWallsObjectCollision(x, y, this.walls.walls)) {
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
        Helper.checkWallsObjectCollision(
          newX,
          this.position.y,
          this.walls.walls
        )
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
        Helper.checkWallsObjectCollision(
          this.position.x,
          newY,
          this.walls.walls
        )
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
