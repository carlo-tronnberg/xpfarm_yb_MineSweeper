class MineSweeper {
  constructor() {
    this.status = 'started';
  }

  getStatus() {
    return this.status;
  }

  getBoard() {
    return [[' ']];
  }
}

module.exports = { MineSweeper };
