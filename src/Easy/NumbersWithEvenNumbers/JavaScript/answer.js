const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that calculates how many of the numbers in an array contain an even number of digits. 
 * @param { number[] } nums - An array of numbers
 * @returns { number } - The amount of numbers with even digits
 */
function myFunction( nums ){
  return nums.filter(num => num.toString().length % 2 === 0).length
}

runTests( myFunction )
