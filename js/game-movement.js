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
        if(this.player.style.top !== '0%'){
        this.playerCords.y -= 1;
        }
        this.renderPlayer();
    }
    movePlayerRight() {
        if(this.player.style.left !== '95%'){
        this.playerCords.x += 1;
        }
        this.renderPlayer();
    }
    movePlayerDown() {
        if(this.player.style.top !== '95%'){
        this.playerCords.y += 1;
        }
        this.renderPlayer();
    }
    movePlayerLeft() {
        if(this.player.style.left !== '0%'){
            this.playerCords.x -= 1;
        }
        
        this.renderPlayer();
    }
    init() {
        this.createPlayer();
        this.renderPlayer()
        this.attachEvents();
    }
}
const player = new Player();
player.init();