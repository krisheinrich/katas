
/**
 * Solution 1: Use Array.prototype.sort and check if deeply equal to the input
 * 
 * Complexity: Best case is O(n log n), since we must perform a sort.
 * Also includes 2 calls to JSON.stringify, each of which is O(n).
 * We could instead iterated through sorted array first and check matching
 * element in the original array.
 */

function isAscOrder(arr) {
  const sorted = arr.slice(0).sort((a, b) => a - b);
  return JSON.stringify(arr) === JSON.stringify(sorted);
}

/**
 * Solution 2: Using Array.prototype.reduce
 * 
 * Complexity: O(n) since it makes one pass through input array
 */

function isAscOrder(arr) {
  return arr.reduce((res, num, i) => {
    return (i === 0 || !res) ? res : num >= arr[i-1];
  }, true);
}

/**
 * Solution 3: Using Array.prototype.every
 * 
 * Complexity: O(n) since it makes one pass through input array
 */

function isAscOrder(arr) {
  return arr.every((num, i) => i === 0 || num >= arr[i-1]);
}


module.exports = isAscOrder;
