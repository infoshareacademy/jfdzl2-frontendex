class GameWall {
  constructor(xx, yy) {
    this.position = { x: xx, y: yy };
  }

  getPosition() {
    return this.position;
  }

  setPosition(position) {
    this.position = position;
  }
}

class WallsContainer {
  constructor() {
    this.walls = [];
  }

  populateCoordinatesArray() {
    let i = 0;
    while (i < 80) {
      let x = Math.floor(Math.random() * 20);
      let y = Math.floor(Math.random() * 20);
      let flag = false;
      this.walls.forEach(wall => {
        if (wall.position.x == x && wall.position.y == y) {
          flag = true;
        }
      });
      if (flag) {
        continue;
      }
      this.walls.push(new GameWall(x, y));
      i++;
    }
  }

  renderWalls() {
    const wallsContent = document.querySelector(".board");
    this.walls.forEach(wall => {
      const wallDOM = document.createElement("div");
      wallDOM.classList.add("wall");

      wallDOM.style.left = wall.position.x * 5 + "%";
      wallDOM.style.top = wall.position.y * 5 + "%";

      wallsContent.appendChild(wallDOM);
    });
  }

  init() {
    this.populateCoordinatesArray();
    this.renderWalls();
  }
}


