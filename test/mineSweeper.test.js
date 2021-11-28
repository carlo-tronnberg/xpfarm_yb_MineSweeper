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
      const game = new Game(width, height);
      game.setBombs(bombBoard);
      expect(game.getBombs()).toEqual(bombBoard);
    });
  });
});
