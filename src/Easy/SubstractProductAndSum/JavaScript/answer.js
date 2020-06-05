const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that scans each digit of a number then sums then and also multiplies them, and finally returns the substraction of both
 * @param { number } n - The number to process
 * @returns { number } - The substraction of the product minus the sum
 */
function productMinusSum(n) {
  let product = 1
  let sum = 0
  while ( n > 0 ) {
    const current = n % 10
    product *= current
    sum += current
    n = parseInt(n / 10)
  }
  return product - sum
}

runTests(productMinusSum)
