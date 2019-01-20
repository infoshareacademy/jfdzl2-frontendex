class GamePoint {
    constructor(walls) {
        this.size = 20;
        this.position = { x: 0, y: 0 };
        this.walls = walls;
    }

    getPosition() {
        return this.position;
    }

    getRandomNumbers() {
        return Math.floor(Math.random() * 20);
    }

    checkPointWallsCollision(x, y) {

        const filteredWalls = this.walls.walls.filter(function (wall) {
            return wall.position.x === x && wall.position.y === y;
        });

        console.warn(filteredWalls);

        const isMatch = filteredWalls.length > 0;
        return isMatch;

    }

    checkPointPlayerCollision() {

    }

    setRandomPosition() {


        const x = this.getRandomNumbers();
        const y = this.getRandomNumbers();
        if (this.checkPointWallsCollision(x, y)) {
            this.setRandomPosition();
            console.log('collision');

            return false;
        }

        this.position.x = x;
        this.position.y = y;

    }

    pointRender() {
        const gamePointDisplay = document.createElement('div');
        gamePointDisplay.classList.add('game-point');

        gamePointDisplay.style.left = this.position.x * 5 + '%';
        gamePointDisplay.style.top = this.position.y * 5 + '%';

        const board = document.querySelector('.board');
        board.appendChild(gamePointDisplay);
    }

    init() {
        this.setRandomPosition();
        if (this.checkPointWallsCollision()) {
            this.setRandomPosition();
        }
        this.pointRender();
        this.checkPointWallsCollision();
    }

}


