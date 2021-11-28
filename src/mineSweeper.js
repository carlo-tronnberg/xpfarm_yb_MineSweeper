class MineSweeper {
  constructor(width, height) {
    this.status = 'started';
    this.createGameBoard(width, height);
  }

  getStatus() {
    return this.status;
  }

  createGameBoard(width, height) {
    this.gameBoard = Array(height)
      .fill()
      .map(() => Array(width).fill(' '));
    this.log('Game created');
  }

  getBoard() {
    return this.gameBoard;
  }

  log(message) {
    console.log(
      '[Sandbox %ix%i] %s',
      this.gameBoard[0].length,
      this.gameBoard.length,
      message
    );
  }
}

module.exports = { MineSweeper };
