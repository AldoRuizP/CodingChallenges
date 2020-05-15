const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that given a string, returns the longest substring of non repeating characters.
 * @param { string } str - The input string to analyze
 * @returns { string } - The longest substring of non repeating characters
 */
function longestSubString( str ){
  let currentLongestSet = new Set()
  const length =  str.split('').reduce( ( longest, char ) => {
    
    if ( currentLongestSet.has(char) ){
      if ( currentLongestSet.size > longest ) longest = currentLongestSet.size
      currentLongestSet.clear()
    }

    currentLongestSet.add(char)
    return longest
  }, 0 )

  return length || str.length
}

runTests( longestSubString )
