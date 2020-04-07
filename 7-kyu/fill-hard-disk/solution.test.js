const { assert } = require('chai');

const save = require('./solution');

describe('save', function () {
  it('should pass test case 1', function () {
    const actual = save([4,4,4,3,3], 12);
    assert.equal(actual, 3);
  });

  it('should pass test case 2', function () {
    const actual = save([4,4,4,3,3], 11);
    assert.equal(actual, 2);
  });
});
