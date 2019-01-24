class Opponent {
    constructor(walls) {
        this.walls = walls;
        this.size = 20;
        this.position = { x: 0, y: 0 }
       
    }

    getRandomNumbers() {
        return Math.floor(Math.random() * 20);
    }

    checkOpponentWallsCollision(){
        
        const filteredWalls = this.walls.walls.filter(function (wall) {
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
    randomMovement() {
       
    }
    opponentRender() {
        const opponentDOM = document.createElement('div');
        const boardDOM = document.querySelector('.board');

        opponentDOM.classList.add('opponent');
        opponentDOM.style.left = this.position.x * 5 + '%';
        opponentDOM.style.top = this.position.y * 5 + '%';

        boardDOM.appendChild(opponentDOM);
    }
    init() {
        this.setRandomPosition();
        
        if (this.checkOpponentWallsCollision()) {
            this.setRandomPosition();
        }
        this.opponentRender();
        this.checkOpponentWallsCollision()
        
    }
}
const opponent = new Opponent();
opponent.init()