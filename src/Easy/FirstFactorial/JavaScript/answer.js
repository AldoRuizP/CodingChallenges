const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A recursive function that returns the factorial of a given number
 * @param { number } n  - The given number to calculate it's factorial
 * @return { number } - The product of the current number times the previous number. Defaulted to 1 when n equals zero
 */
function firstFactorial( n ){
  return n === 0 ? 1 :  n * firstFactorial( n - 1) 
}

runTests( firstFactorial )
