const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that returns the longest substring of non repeating characters in a string
 * @param { string } str - The input string to analyze
 * @returns { number } - The length of the longest substring of non repeating characters
 */
function longestSubString( str ){

  let currentSubstring = []
  let maxLength = 0

  for ( let i = 0; i < str.length; i++ ){
    const currentChar = str[i]
    if ( currentSubstring.includes(currentChar) ){
      currentSubstring = currentSubstring.slice( currentSubstring.indexOf(currentChar) + 1  )
    }
    currentSubstring.push(currentChar)
    maxLength = Math.max( maxLength, currentSubstring.length )
  }

  return maxLength 
}


runTests( longestSubString )
