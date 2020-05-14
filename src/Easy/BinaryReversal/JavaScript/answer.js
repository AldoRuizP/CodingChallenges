const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that receives a stringified positive integer and returns its binary reversal integer representation
 * @param { string } str - The string representing a positive integer 
 * @returns { integer } - The integer which correspond to the binary reversal of the input 
 */
function binaryReversal( str ){
  let binary = parseInt(str).toString(2)
  const missingPrefix = binary.length % 8 === 0 ? 0 : 8 - binary.length % 8
  binary =  '0'.repeat(missingPrefix) + binary
  const binaryReversed =  binary.split('').reverse().join('')
  return parseInt(binaryReversed, 2)
}

runTests( binaryReversal )

