const { xpfarm_yb_MineSweeper } = require('../src/mineSweeper');

describe('xpfarm_yb_MineSweeper', () => {
  it('Start a new mineSweeper', () => {
    const mineSweeper = new xpfarm_yb_MineSweeper();

    expect(mineSweeper.getStatus()).toBe('running');
  });
  
});

