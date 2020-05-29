const runTests = require('../../../RunTests/JavaScript/index')

/** 
 * A function that scans an array of numbers with duplicated items to find the one item without a duplicate value
 * Complexity: O(1) + ... + O( 1 ) + O(n) = O(n)
 * @param { number[] } numbers - An array of numbers
 * @returns { number } - A number from the array that has no duplicate
 */
function findSingleInDuplicates( numbers ){
  const numbersSet = new Set()
  numbers.forEach( number =>  numbersSet.has( number ) ? numbersSet.delete( number ) : numbersSet.add( number ) )
  return Array.from( numbersSet ).pop()
}

runTests( findSingleInDuplicates )
