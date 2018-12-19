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
        coordinates.push(createCoordinates(randomNumber(), randomNumber()))
        for (var i = 0; i < 39; i++) {

            if (coordinates.indexOf(createCoordinates(randomNumber(), randomNumber())) === -1) {
                coordinates.push(createCoordinates(randomNumber(), randomNumber()))
            }
        }
        return coordinates
    }
    while (coordinates.length === 40)
}

