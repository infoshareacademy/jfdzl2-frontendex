class Player {
  constructor(walls, lifeDown, scoreUp, scoreRender, opponent) {
    this.walls = walls;
    this.opponent = opponent;
    this.handleLifeDown = lifeDown;
    this.handleScoreUp = scoreUp;
    this.handleScoreRender = scoreRender;
    this.size = 20;
    this.playerCords = {
      x: 0,
      y: 0
    };
    this.player = null;
  }

  setPointPosition(point) {
    this.point = point;
  }

  checkPointPlayerCollision() {
    if (
      this.playerCords.x === this.point.getPosition().x &&
      this.playerCords.y === this.point.getPosition().y
    ) {
      this.handleScoreUp();
      this.handleScoreRender();
    }
  }

  checkOpponentPlayerCollision() {
    if (
      this.playerCords.x === this.opponent.getOpponentPosition().x &&
      this.playerCords.y === this.opponent.getOpponentPosition().y
    ) {
      this.handleLifeDown();
    }
  }

  setRandomPosition() {
    const x = Helper.getRandomNumbers();
    const y = Helper.getRandomNumbers();
    if (Helper.checkWallsObjectCollision(x, y, this.walls.walls)) {
      this.setRandomPosition();

      return false;
    }

    this.playerCords.x = x;
    this.playerCords.y = y;
  }

  renderPlayer() {
    this.player = document.createElement("div");
    this.player.classList.add("player");

    this.player.style.left = this.playerCords.x * 5 + "%";
    this.player.style.top = this.playerCords.y * 5 + "%";

    const board = document.querySelector(".board");

    const existingPlayer = document.querySelector(".player");
    if (existingPlayer) {
      board.removeChild(existingPlayer);
    }
    board.appendChild(this.player);
  }

  attachEvents() {
    document.addEventListener(
      "keydown",
      function(e) {
        switch (e.key) {
          case "ArrowUp":
            return this.movePlayerUp();
          case "ArrowRight":
            return this.movePlayerRight();
          case "ArrowDown":
            return this.movePlayerDown();
          case "ArrowLeft":
            return this.movePlayerLeft();
        }
      }.bind(this)
    );
  }
  movePlayerUp() {
    if (this.player.style.top !== "0%") {
      this.playerCords.y -= 1;
    }
    this.checkPointPlayerCollision();
    this.checkOpponentPlayerCollision();
    this.renderPlayer();
  }
  movePlayerRight() {
    if (this.player.style.left !== "95%") {
      this.playerCords.x += 1;
    }
    this.checkPointPlayerCollision();
    this.checkOpponentPlayerCollision();
    this.renderPlayer();
  }
  movePlayerDown() {
    if (this.player.style.top !== "95%") {
      this.playerCords.y += 1;
    }
    this.checkPointPlayerCollision();
    this.checkOpponentPlayerCollision();
    this.renderPlayer();
  }
  movePlayerLeft() {
    if (this.player.style.left !== "0%") {
      this.playerCords.x -= 1;
    }
    this.checkPointPlayerCollision();
    this.checkOpponentPlayerCollision();
    this.renderPlayer();
  }
  init() {
    this.setRandomPosition();
    this.renderPlayer();
    this.attachEvents();
  }
}
