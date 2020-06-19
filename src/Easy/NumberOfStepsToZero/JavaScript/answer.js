const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that count the number of needed operations to turn a given number into zero
 * @param { number } num - A positive integer
 * @returns  { number } steps - A positive integer
 */
function numberOfSteps( num ) {
  let steps = 0
  while (num) {
    steps++
    num % 2 ? num-- : num /= 2
  }
  return steps
}

runTests(numberOfSteps)
