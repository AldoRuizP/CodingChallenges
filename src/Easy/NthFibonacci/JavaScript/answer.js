const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that returns the nth value of the fibonacci sequence
 * @param { number } n - The nth value to return
 * @returns { number } - The nth value of the fibonacci sequence
 */
function nthFibonacci( n ){
  return ( n < 2 ) ? n : nthFibonacci( n - 1 ) + nthFibonacci( n - 2 ) 
}

runTests( nthFibonacci )
