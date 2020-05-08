const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that finds the longest word in a string, ignoring special characters
 * @param { string } sen - The word to analyze
 * @returns { string } - The first longest word in the string
 */
function longestWord( sen ){
  return sen.replace( /[^1-9a-zA-Z ]/g, '').split(' ').reduce( (a, b) => a.length < b.length ? b : a, '')
}

runTests( longestWord )
