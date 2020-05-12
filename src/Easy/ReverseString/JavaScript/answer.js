const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that receives a string and reverses it
 * @param { string } str - The string to reverse
 * @returns { string } - The reversed string
 */
function reverseString( str ){
  return str.split('').reverse().join('')
}

runTests( reverseString )
