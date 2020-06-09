const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that returns the maximum number you can get by changing at most one digit of a given number consisting of 6 and 9
 * @param { number } num - A number consisting only of 6 and 9
 * @returns { number } - The highest number that can be made given the input, just by changing one digit
 */
function maximum69Number( num ){
  const adjustedNumber = num.toString().replace( '6', '9')
  return parseInt( adjustedNumber )
}

runTests( maximum69Number )
