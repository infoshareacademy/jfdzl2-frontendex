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
    var coordinates = []
    for (i = 0; i < 40; i++) {
        coordinates.push(createCoordinates(randomNumber(), randomNumber()))
    }
    return coordinates
}