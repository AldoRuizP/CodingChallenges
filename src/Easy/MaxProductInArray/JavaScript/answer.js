const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that given the array of integers nums, 
 * return the maximum value that can be obtain for multiplying two different elements in the array
 * @param { number[] }
 * @returns { number }
 */
function maxProduct( nums ){
  const n1 = Math.max( ...nums ) 
  const indexN1 = nums.indexOf( n1 ) 
  nums [ indexN1 ] = 0 
  const n2 = Math.max(...nums) 
  return (n1-1) * (n2-1)
}

runTests( maxProduct )
