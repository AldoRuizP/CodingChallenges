const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that scans a given string in order to determine what is its first recurrent letter
 * @param { string } str - The string to scan in order to fin the first repeated character
 * @returns { string } = a string with the first repeated character
 */
function firstRecurrentLetter( str ){

  const lettersSet = new Set()
  let repeated = ''

  for ( let i = 0; i < str.length; i++){
    const letter = str.charAt(i)
    if ( !repeated && lettersSet.has(letter) ) return letter
    else lettersSet.add( letter )
  }

  return  'None'
}

runTests( firstRecurrentLetter )
