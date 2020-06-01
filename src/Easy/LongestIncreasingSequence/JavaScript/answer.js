const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that returns the longest subsequence, not necessarily contiguous, in an array
 * @param { number[] } arr - An array of integers
 * @returns { number } longest - The longest increasing subsequence of the given array 
 */
function longestIncreasingSubsequence( arr ){

  let lengths = new Array(arr.length).fill(1)

  for( let i = 1; i < arr.length; i++ ){
    for( let j = 0; j < i; j++ ){
      if ( arr[i] > arr[j] ){
        lengths[i] = Math.max( lengths[i], lengths[j] + 1 )
      } 
    }
  }g

  return Math.max( ...lengths ) 
}

runTests( longestIncreasingSubsequence )
