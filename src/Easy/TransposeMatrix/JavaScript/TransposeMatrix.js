const runTests = require('../../../RunTests/JavaScript/index')

/**
 * Solution using Array.prototype.map()
 * Transpose a matrix
 * @param {number[][]} matrix - A 2D array of integers
 * @returns {number[][]} A 2D array matching the transpose of the given matrix
 */
function transposeMatrixArrayMap(matrix) {
  return matrix[0].map((_, index) => matrix.map(row => row[index]))
}

/**
 * Solution using a second array and traditional for loops
 * Transpose a matrix
 * @param {number[][]} matrix - A 2D array of integers
 * @returns {number[][]} A 2D array matching the transpose of the given matrix
 */
function transposeMatrixForLoop(matrix) {
  const rows = matrix.length
  const cols = matrix[0].length
  const transposed = []

  for (let i = 0; i < cols; i++) {
    transposed[i] = Array(rows)
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposed[j][i] = matrix[i][j]
    }
  }

  return transposed
}

runTests(transposeMatrixArrayMap)
runTests(transposeMatrixForLoop)