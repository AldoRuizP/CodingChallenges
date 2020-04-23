const runTests = require('../../../RunTests/JavaScript/index')
const CHAR_A_ASCII_VALUE = 97

function myFunction(inputString) {

  charMap = new Map()
  inputString.split('').sort().forEach(char => {
    const newCharCount = charMap.has(char) ? charMap.get(char) + 1 : 1
    charMap.set( char, newCharCount )
  })

  const areKeysValid = checkKeysSequence([...charMap.keys()])
  const areValuesValid = checkValuesSequence([...charMap.values()])
  return areKeysValid && areValuesValid
}

function checkKeysSequence(keys) {
  const lastAscii = keys.slice(-1)[0].charCodeAt(0)
  const expectedLastAscii = CHAR_A_ASCII_VALUE + keys.length - 1
  return lastAscii  === expectedLastAscii
}

function checkValuesSequence(values) {
  let previous = values[0] + 1 
  let isSorted = true
  values.forEach( value => {
    isSorted = ( isSorted && previous >= value )
    previous = value
  })
  return isSorted
}

console.log(myFunction('bbbaacdafe')) // true
console.log(myFunction('aabbb')) // false 
console.log(myFunction('bbc')) // false 
console.log(myFunction('az')) // false 
console.log(myFunction('aaaaaaaaaaaaaaaaaaaa')) // true
console.log(myFunction('abcdef')) // true




