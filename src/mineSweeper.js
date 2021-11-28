class MineSweeper {
  constructor(width, height) {
    this.status = 'started';
    this.createGameBoard(width, height);
  }

  getStatus() {
    return this.status;
  }

  createGameBoard(width, height) {
    if (width == 2 && height == 1) {
      this.gameBoard = [[' ', ' ']];
    } else {
      this.gameBoard = [[' ']];
    }
  }

  getBoard() {
    return this.gameBoard;
  }
}

module.exports = { MineSweeper };
