const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that scans a given string in order to determine what is its first recurrent letter
 * @param { string } str - The string to scan in order to fin the first repeated character
 * @returns { string } = A string with the first repeated character, or "None" if none was found
 */
function firstRecurrentLetter( str ){

  const lettersSet = new Set()

  for ( let i = 0; i < str.length; i++){
    const letter = str.charAt(i)
    if ( lettersSet.has(letter) ) return letter
    else lettersSet.add( letter )
  }

  return  'None'
}

runTests( firstRecurrentLetter )
