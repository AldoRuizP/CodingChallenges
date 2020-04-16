const runTests = require('../../../RunTests/JavaScript/index')

/**
 * Solution using Array.prototype.some()
 * A function that returns a fixed point in a sorted list of integer
 * @param { number[] } numbers -  An array of sorted integers 
 * @return { number | null} match - The index of the fixed point, or null if there is none 
 */
function findFixedPointArraySome( numbers ){
	let match
  numbers.some( ( number, index ) => match = number === index ? number + 1 : match)
	return match ? match - 1 : -1
}

/**
 * Solution using a traditional for loop
 * A function that returns a fixed point in a sorted list of integer
 * @param { number[] } numbers -  An array of sorted integers 
 * @return { number | null} match - The index of the fixed point, or null if there is none 
 */
function findFixedPointForLoop( numbers ) {
  for ( let i = 0; i < numbers.length; i++) {
    if ( i === numbers[i] ) return i
  }
  return -1
}

runTests( findFixedPointArraySome )
runTests( findFixedPointForLoop )

