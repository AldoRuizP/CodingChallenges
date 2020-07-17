const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that removes any pair of adjacent '1' and '0' until no more matches are found, then return the length of the
 * minimum string
 * @param { string } s - A string made out ouf '0', '1' and '*'
 * @returns { number } s.length - The length of the minimal string after applying replacement
 */
function zeroesAndOnes(s) {

  const regex = new RegExp('01|10', 'g')
  let res

  while (res !== s) {
    res = s
    s = s.replace(regex, '')
  }

  return s.length
}

runTests(zeroesAndOnes)
