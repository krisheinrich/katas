const { assert } = require('chai');
const isAscOrder = require('./solution');

describe('isAscOrder', function () {

  it('should return true for ordered arrays', function () {
    assert.isTrue( isAscOrder([1,2,4,7,19]) );
    assert.isTrue( isAscOrder([1,2,3,4,5]) );
  });

  it('should return false for unordered arrays', function () {
    assert.isFalse( isAscOrder([1,6,10,18,2,4,20]) );
    assert.isFalse( isAscOrder([9,8,7,6,5,4,3,2,1]) );
  });

});
