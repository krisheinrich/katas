const { assert } = require('chai');

const theLift = require('./solution1');

describe('theLift', function () {
  it('should pass test case 1', function () {
    var queues = [
      [], // G
      [], // 1
      [5,5,5], // 2
      [], // 3
      [], // 4
      [], // 5
      [], // 6
    ];
    var actual = theLift(queues,5);

    assert.deepEqual(actual, [0,2,5,0]);
  });

  it('should pass test case 2', function () {
    var queues = [
      [], // G
      [], // 1
      [1,1], // 2
      [], // 3
      [], // 4
      [], // 5
      [], // 6
    ];
    var actual = theLift(queues,5);

    assert.deepEqual(actual, [0,2,1,0]);
  });

  it('should pass test case 3', function () {
    var queues = [
      [], // G
      [3], // 1
      [4], // 2
      [], // 3
      [5], // 4
      [], // 5
      [], // 6
    ];
    var actual = theLift(queues,5);

    assert.deepEqual(actual, [0,1,2,3,4,5,0]);
  });

  it('should pass test case 4', function () {
    var queues = [
      [], // G
      [0], // 1
      [], // 2
      [], // 3
      [2], // 4
      [3], // 5
      [], // 6
    ];
    var actual = theLift(queues,5);

    assert.deepEqual(actual, [0,5,4,3,2,1,0]);
  });

  it('should pass test case 5', function () {
    var queues = [
      [], // G
      [0, 3, 4], // 1
      [1, 5], // 2
      [4, 2], // 3
      [], // 4
      [6], // 5
      [], // 6
    ];
    var actual = theLift(queues,2);

    assert.deepEqual(actual, [0,1,2,3,4,5,6,3,2,1,0,2,5,0]);
  });

  it('should pass test case 6', function () {
    var queues = [
      [], // G
      [0,0,0,0], // 1
      [0,0,0,0], // 2
      [0,0,0,0], // 3
      [0,0,0,0], // 4
      [0,0,0,0], // 5
      [0,0,0,0], // 6
    ];
    var actual = theLift(queues,5);

    assert.deepEqual(actual, [0,6,5,4,3,2,1,0,5,4,3,2,1,0,4,3,2,1,0,3,2,1,0,1,0]);
  });

  it('should pass test case 7', function () {
    var queues = [
      [4,3], // G
      [0,4], // 1
      [3,4,4,4], // 2
      [4, 1, 0, 4], // 3
      [2], // 4
      [], // 5
      [] // 6
    ];
    var actual = theLift(queues,4);

    assert.deepEqual(actual, [0,1,2,3,4,3,2,1,0,2,4,0]);
  });
});
