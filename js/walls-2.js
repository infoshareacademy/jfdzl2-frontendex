class GameWall {
  constructor() {
    this.position = { x: 0, y: 0 };
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

    do {
      let wall = new GameWall();
      let duplicates = null;
      let randomPosition = null;
      do {
        randomPosition = {
          x: Math.floor(Math.random() * 20),
          y: Math.floor(Math.random() * 20)
        };
        duplicates = this.walls.filter(w => {
          w.getPosition == randomPosition;
        });
        console.log(duplicates)
      } while (duplicates.length > 0);
      wall.setPosition(randomPosition);
      this.walls.push(wall);
    } while (this.walls.length < 40);

    for (let i = 0; i < 40; i++) {
      this.walls.push(new GameWall());
    }
    this.walls.forEach(function(wall) {
      wall.position.x = Math.floor(Math.random() * 20);
      wall.position.y = Math.floor(Math.random() * 20);
    });
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

const gameWalls = new WallsContainer();
gameWalls.init();
