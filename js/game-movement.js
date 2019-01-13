class Player {
    constructor() {
        this.size = 20;
        this.playerCords = {
            x: 0,
            y: 0,
        }
        this.player = null;
    }

    renderPlayer() {


        this.player.style.left = 5 * this.playerCords.x + '%';
        this.player.style.top = 5 * this.playerCords.y + '%';

    }

    createPlayer() {
        this.player = document.createElement('div');
        this.player.classList = 'player';
        const board = document.querySelector('.board');
        board.appendChild(this.player);
    }

    attachEvents() {
        document.addEventListener('keydown', function (e) {

            switch (e.key) {
                case 'ArrowUp':
                    return this.movePlayerUp();
                case 'ArrowRight':
                    return this.movePlayerRight();
                case 'ArrowDown':
                    return this.movePlayerDown();
                case 'ArrowLeft':
                    return this.movePlayerLeft();
            }
        }.bind(this))
    }
    movePlayerUp() {
        this.playerCords.y += 1;
        this.renderPlayer();
    }
    movePlayerRight() {
        console.log('right')
    }
    movePlayerDown() {
        console.log('down')
    }
    movePlayerLeft() {
        console.log('left')
    }
    init() {
        this.createPlayer();
        this.renderPlayer()
        this.attachEvents();
    }
}
const player = new Player();
player.init();