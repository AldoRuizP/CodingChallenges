const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function which given an integer n and an integer start,
 * defines an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
 * An then returns the bitwise XOR of all elements of nums.
 * @param { number[] } params - An array of two elements, First element is the length of the array and the second is the start
 * @return { number } result - The resulting value after the operation
 */
function arrayXOR( params ){
  const n = params[0]
  const start = params[1]
  let result = start
  for( let i = 1; i < n; i++ ) {
      result ^= start + ( 2 * i )
  }
  return result
}

runTests( arrayXOR )
