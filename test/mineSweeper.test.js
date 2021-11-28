const { MineSweeper } = require('../src/mineSweeper');

describe("I want to play a game of Mine Sweeper where I'll win if I clear the board without stepping on a bomb", () => {
  describe('US1 Game Board Creation', () => {
    it.each([
      [1, 1, [[' ']]],
      [2, 1, [[' ', ' ']]],
      [1, 2, [[' '], [' ']]],
      [
        2,
        2,
        [
          [' ', ' '],
          [' ', ' '],
        ],
      ],
      [
        3,
        3,
        [
          [' ', ' ', ' '],
          [' ', ' ', ' '],
          [' ', ' ', ' '],
        ],
      ],
    ])(
      'Given a Game Board width %i and height %i,    When starting the game,    Then I should get the empty Game Board %o',
      (width, height, gameBoard) => {
        const game = new MineSweeper(width, height);
        expect(game.getBoard()).toEqual(gameBoard);
      }
    );

    it('Given a Game Board width 3 and height 3,    When starting the game,    Then I want to create the hidden Bombs Board, matching the Game Board dimension', () => {
      let width = 3;
      let height = 3;
      let bombBoard = [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 0],
      ];
      const game = new MineSweeper(width, height);
      game.setBombs(bombBoard);
      expect(game.getBombs()).toEqual(bombBoard);
    });

    it('Given a Game Board width 3 and height 3,    When starting the game,    Then I want to create the empty Game Board and get it back as a string', () => {
      const game = new MineSweeper(3, 3);
      let gameBoardString =
        '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
      expect(game.drawGameBoard()).toEqual(gameBoardString);
    });
  });

  describe('US2 Allow stepping into a square', () => {
    it('Given the Game Board,    When stepping on a square,    Then the game should know whether I am allowed to do so', () => {
      const game = new MineSweeper(3, 3);
      expect(game.allowOperation(0, 0)).toEqual(true);
      game.setSquareValue(0, 0, '_');
    });

    it('Given the Game Board,    When stepping on a square,    Then the game should know whether I am allowed to do so', () => {
      const game = new MineSweeper(3, 3);
      expect(game.allowOperation(0, 0)).toEqual(true);
      game.setSquareValue(0, 0, '_');
      expect(game.allowOperation(0, 0)).toEqual(false);
      game.setSquareValue(0, 0, '_');
      expect(game.allowOperation(0, 0)).toEqual(false);
    });
  });

  describe('US3 Game Over - Lose the game by stepping on a bomb', () => {
    it.each([
      [0, 0, 'running'],
      [1, 1, 'Game Over'],
      [0, 1, 'Game Over'],
      [0, 2, 'running'],
    ])(
      'Given the 3x3 Game Board,  When stepping on the square (%i,%i),  Then the game will be %s',
      (x, y, status) => {
        const game = new MineSweeper(3, 3);
        game.setBombs([
          [0, 0, 0], // ▲
          [1, 1, 0], // |
          [0, 1, 0], //  ——▶
        ]);
        expect(game.allowOperation(x, y)).toEqual(true);
        game.stepOnSquare(x, y);
        game.stepOnSquare(x, y);
        expect(game.allowOperation(x, y)).toEqual(false);
        expect(game.getStatus()).toEqual(status);
      }
    );
  });
});
