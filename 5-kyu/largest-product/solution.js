
/**
 * Solution 1
 * 
 * Iterate through input string and compute product for each 5-set,
 * reassigning to the max product when computed product is larger
 * 
 * Complexity: O(n * m) -> here m = 5
 */
function greatestProduct(string) {
  let maxProduct = 0;

  for (let startIndex = 0; startIndex < string.length - 4; startIndex++) {
    const currProduct = string
      .substr(startIndex, 5)
      .split('')
      .map(char => Number(char))
      .reduce((total, n) => total * n, 1);

    if (currProduct > maxProduct) {
      maxProduct = currProduct;
    }
  }

  return maxProduct;
}

module.exports = greatestProduct;
