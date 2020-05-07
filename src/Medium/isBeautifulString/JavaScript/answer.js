const runTests = require('../../../RunTests/JavaScript/index')
const FIRST_ASCII_VALUE = 96

/**
 * A function that determines if a given string is beautiful
 * @param { string } inputString - The string to analyze
 * @returns { boolean } - True or false if the given string is beautiful
 */
function isBeautifulString(inputString) {
  const charMap = mapAndCountCharacters( inputString )
  const areKeysValid = checkAlphabeticalOrder([...charMap.keys()])
  const areValuesValid = checkDescendentOrder([...charMap.values()])
  return areKeysValid && areValuesValid
}

/**
 * A function that iterates each char in a string and counts them, then maps it
 * @param { string } inputString - A string to map its characters
 * @returns { Map[char, number] } - A map with each character as a key and its number of occurrences as the value 
 */
function mapAndCountCharacters( inputString ){
  const charMap = new Map()
  inputString.split('').sort().forEach(char => {
    const newCharCount = charMap.has(char) ? charMap.get(char) + 1 : 1
    charMap.set( char, newCharCount )
  })
  return charMap
}

/**
 * A function that determines if the values an array of characters are in a strict sequence and don't skip any char in between
 * @param { char[] } keys - An array of all the characters that appear an in the given string
 * @returns { boolean } - True or false if the characters are in a proper sequence and don't skip any char in between
 */
function checkAlphabeticalOrder(keys) {
  const lastChar = keys[ keys.length - 1 ]
  const expectedLastChar = String.fromCharCode( keys.length + FIRST_ASCII_VALUE )
  return lastChar  === expectedLastChar
}

/**
 * A function that determines if the values of an array of integers are in descendent order
 * @param { integer[] } values - An array of integers with the number of occurrences of each character in the string
 * @returns { boolean } - True or false if the given array of integers in descendent order
 */
function checkDescendentOrder(values) {
  const sortedValues = values.slice().sort( (a, b) =>  b - a ) 
  const areDifferent = sortedValues.some( ( sorted, index ) => sorted !== values[ index ] )
  return !areDifferent
}

runTests( isBeautifulString )