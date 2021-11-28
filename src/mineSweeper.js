class MineSweeper {
  GAME_RUNNING = 'running';
  GAME_OVER = 'Game Over';
  GAME_WIN = 'You Win';

  constructor(width, height) {
    this.status = this.GAME_RUNNING;
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

  setBombs(bombBoard) {
    this.bombBoard = bombBoard;
  }

  getBombs() {
    return this.bombBoard;
  }

  getBoard() {
    return this.gameBoard;
  }

  drawGameBoard() {
    let gameBoardString = '';
    for (var i = 0; i < this.gameBoard.length; i++) {
      gameBoardString += '+-'.repeat(this.gameBoard[0].length) + '+\n|';
      for (let j = 0; j < this.gameBoard[i].length; j++) {
        gameBoardString += this.gameBoard[i][j] + '|';
      }
      gameBoardString += '\n';
    }
    gameBoardString += '+-'.repeat(this.gameBoard[0].length) + '+';
    return gameBoardString;
  }

  setSquareValue(x, y, value) {
    if (this.allowOperation(x, y))
      this.gameBoard[this.gameBoard[0].length - 1 - y][x] = value;
  }

  allowOperation(x, y) {
    return this.gameBoard[this.gameBoard[0].length - 1 - y][x] === ' ';
  }

  stepOnSquare(x, y) {
    var message = '';
    if (this.getBombAt(x, y) == 1) {
      this.status = this.GAME_OVER;
      this.setSquareValue(x, y, 'X');
      message = 'BOOM! - Game Over';
    } else {
      this.setSquareValue(x, y, '_');
      this.status = this.GAME_RUNNING;
    }
    this.log(message);
  }

  getBombAt(x, y) {
    return this.bombBoard[this.bombBoard[0].length - 1 - y][x];
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
