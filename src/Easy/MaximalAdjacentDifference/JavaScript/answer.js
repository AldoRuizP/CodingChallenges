const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that returns the max difference between any of the elements in the array
 * @param { number[] } inputArray - An array of numbers 
 * @returns { number } maxDiff - The max difference between any of its adjacent element
 */
function arrayMaximalAdjacentDifference(inputArray) {
  let maxDiff = 0

  for (let i = 0; i < inputArray.length - 1; i++) {
    const currentDiff = Math.abs(inputArray[i] - inputArray[i + 1])
    maxDiff = Math.max(currentDiff, maxDiff)
  }

  return maxDiff
}

runTests(arrayMaximalAdjacentDifference)
