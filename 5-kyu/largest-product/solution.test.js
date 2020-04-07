const { assert } = require('chai');

const greatestProduct = require('./solution');

describe('greatestProduct', function () {
  it('should pass test case 1', function () {
    const actual = greatestProduct("123834539327238239583");
    assert.equal(actual, 3240);
  });
});
