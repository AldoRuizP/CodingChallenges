const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that scans a string to determine if it represents a valid number, which could be integer, negative, floating, scientific notation, etc
 * @param { string } str - The string the scan
 * @returns { boolean } - A boolean determining if the string represents a valid number
 */
function determineIfNumber( str ){
  const regex = new RegExp(/^-?\d*\.?\d+[e?\d+]?\d*$/, 'g')
  return regex.test( str )
}

runTests( determineIfNumber )
