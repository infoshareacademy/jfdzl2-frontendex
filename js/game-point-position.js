class GamePoint {
    constructor() {
        this.size = 20;
        this.position = { x: 0, y: 0 };
    }

    getRandomNumbers() {
        return Math.floor(Math.random() * 20);
    }

    setRandomPosition() {
        this.position.x = this.getRandomNumbers();
        this.position.y = this.getRandomNumbers();
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
        this.pointRender();
    }

}

const gamePoint = new GamePoint();
gamePoint.init();
