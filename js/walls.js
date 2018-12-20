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

