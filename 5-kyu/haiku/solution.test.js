const { assert } = require('chai');

const isHaiku = require('./solution');

describe('isHaiku', function () {
  it('return true for a haiku', function () {
    const actual = isHaiku(`
      An old silent pond...
      A frog jumps into the pond,
      splash! Silence again.
    `);

    assert.equal(actual, true);
  });

  it('return false for a non-haiku', function () {
    const actual = isHaiku(`
      Autumn moonlight -
      a worm digs silently
      into the chestnut.
    `);

    assert.equal(actual, false);
  });
});
