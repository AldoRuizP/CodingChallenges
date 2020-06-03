const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that counts the number of jewels, given a list of jewel types and the available stones
 * @param { string[]} jewelsAndStones - An array of strings. First string represents the list of jewels, and the second string represents stones available
 * @returns { number } - the number of available jewels
 */
function countJewels( jewelsAndStones ){
  const [ jewels, stones ] = jewelsAndStones
  return jewels.split('').reduce(  ( myJewels, jewel ) => myJewels + ( stones.match( new RegExp(jewel, "g")) || [] ).length, 0 )
}

runTests( countJewels )
