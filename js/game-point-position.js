class GamePoint {
  constructor(walls) {
    this.size = 20;
    this.position = { x: 0, y: 0 };
    this.walls = walls;
  }

  getPosition() {
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

  pointRender() {
    const gamePointDisplay = document.createElement("div");
    gamePointDisplay.classList.add("game-point");

    gamePointDisplay.style.left = this.position.x * 5 + "%";
    gamePointDisplay.style.top = this.position.y * 5 + "%";

    const board = document.querySelector(".board");
    board.appendChild(gamePointDisplay);
  }

  init() {
    this.setRandomPosition();
    this.pointRender();
  }
}
