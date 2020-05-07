const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that shifts all the letters of a string to its next letter in the alphabet, and then uppercase all the vowels
 * @param { string } str - The string to convert
 * @return { string } - The converted string
 */
function letterChanges( str ){
  return str.split('').map( c => shiftAndConvertLetter( c )).join('')
}

/**
 * Auxiliary function to shift and capitalize a letter 
 * @param { char } letter - The letter to be shifted and capitalized
 * @returns { char } = The shifted and capitalized letter
 */
function shiftAndConvertLetter( letter ){
  let shiftedLetter = letter

  if ( letter >= 'a' && letter <= 'z' ) {
    const nextRawAscii = letter.charCodeAt() + 1
    const nextAscii = ( nextRawAscii === 123 )  ? 97 : nextRawAscii
    shiftedLetter = String.fromCharCode( nextAscii )
  }

  return /[aeiou]/.test(shiftedLetter) ? shiftedLetter.toUpperCase() : shiftedLetter
}


runTests( letterChanges )
