const runTests = require('../../../RunTests/JavaScript/index')


/**
 * A function that returns the number of negative values in a matrix
 * @param { number[][]} grid - An array of arrays on integers
 * @returns { number } negatives - The total number of negative values in the given matrix
 */
function countNegatives(grid) {
  let negatives = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] < 0) negatives++
    }
  }

  return negatives
}

runTests(countNegatives)
