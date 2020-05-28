const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that reverses the words in a string while keeping word order
 * @param { string } str - The string to process
 * @returns { string } - The original string with each word reversed
 */
function reverseWords( str ){
  return str.split(' ').map( word => word.split('').reverse().join('')  ).join(' ')
}

runTests( reverseWords )
