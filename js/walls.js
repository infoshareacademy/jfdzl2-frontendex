function createCoordinates(x, y) {
    return {
        x: x,
        y: y
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 20)
}

function getCoordinates() {
    do {
        var coordinates = []

        for (var i = 0; i < 40; i++) {

            if (coordinates.indexOf(createCoordinates(randomNumber(), randomNumber())) === -1) {
                coordinates.push(createCoordinates(randomNumber(), randomNumber()))
            }
        }
        return coordinates
    }
    while (coordinates.length === 40)
}

function renderWalls() {
    var walls = getCoordinates()
    var wallsContent = document.querySelector('.board')
    wallsContent.innerHTML = ''

    walls.forEach(function (coordinate) {
        var content = `<div class="wall" style="left: ${coordinate.x * 5}%; top: ${coordinate.y * 5}%;" ></div>`

        var wall = wallsContent.insertAdjacentHTML('afterbegin', content)
    })
}