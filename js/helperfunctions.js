class Helper {
  static getRandomNumbers() {
    return Math.floor(Math.random() * 20);
  }

  static checkWallsObjectCollision(x, y, walls) {
    const filteredWalls = walls.filter(function(wall) {
      return wall.position.x === x && wall.position.y === y;
    });

    const isMatch = filteredWalls.length > 0;
    return isMatch;
  }
}
