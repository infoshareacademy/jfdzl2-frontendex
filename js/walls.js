// function createCoordinates(x, y) {
//     return {
//         x: x,
//         y: y
//     }
// }

// function randomNumber() {
//     return Math.floor(Math.random() * 20)
// }

// function getCoordinates() {
//     do {
//         var coordinates = []

//         for (var i = 0; i < 40; i++) {

//             if (coordinates.indexOf(createCoordinates(randomNumber(), randomNumber())) === -1) {
//                 coordinates.push(createCoordinates(randomNumber(), randomNumber()))
//             }
//         }
//         return coordinates
//     }
//     while (coordinates.length === 40)
// }

// function renderWalls() {
//     var walls = getCoordinates()
//     var wallsContent = document.querySelector('.board')
//     wallsContent.innerHTML = ''

//     walls.forEach(function (coordinate) {
//         var content = `<div class="wall" style="left: ${coordinate.x * 5}%; top: ${coordinate.y * 5}%;" ></div>`

//         var wall = wallsContent.insertAdjacentHTML('afterbegin', content)
//     })
// }

class WallCoordinates {
    constructor() {
        this.x = x
        this.y = y
    }

    const wallCoordinates = new WallCoordinates();
    wallCoordinates.init()


    randomNumber() {
        return Math.floor(Math.random() * 20)
    }


    getCoordinates() {
        do {
            const coordinates = []

            for (i = 0; i < 40; i++) {

                if (coordinates.indexOf(new WallCoordinates(randomNumber(), randomNumber())) === -1) {
                    coordinates.push(new WallCoordinates(randomNumber(), randomNumber()))
                }
            }
            return coordinates
        }
        while (coordinates.length === 40)
    }

    renderWalls() {
        const walls = this.getCoordinates()
        const wallsContent = document.querySelector('.board')
        wallsContent.innerHTML = ''

        walls.forEach((coordinate) => {
            const wall = document.createElement('div')
            wall.classList.add('wall')

            wall.style.left = this.x * 5 + '%';
            wall.style.top = this.y * 5 + '%';

            const board = document.querySelector('.board')
            board.appendChild(wall)
        })
    }



    init() {
        this.renderWalls()
    }

}