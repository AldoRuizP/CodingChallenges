const runTests = require('../../../RunTests/JavaScript/index')
const FIRST_ASCII_VALUE = 96

function myFunction(inputString) {

  charMap = new Map()
  inputString.split('').sort().forEach(char => {
    const newCharCount = charMap.has(char) ? charMap.get(char) + 1 : 1
    charMap.set( char, newCharCount )
  })

  const areKeysValid = checkAlphabeticalOrder([...charMap.keys()])
  const areValuesValid = checkDescendentOrder([...charMap.values()])
  return areKeysValid && areValuesValid
}


function checkAlphabeticalOrder(keys) {
  const lastChar = keys[ keys.length - 1 ]
  const expectedLastChar = String.fromCharCode( keys.length + FIRST_ASCII_VALUE )
  return lastChar  === expectedLastChar
}

function checkDescendentOrder(values) {
  let previous = values[0] + 1 
  let isSorted = true
  values.forEach( value => {
    isSorted = ( isSorted && previous >= value )
    previous = value
  })
  return isSorted
}

runTests( myFunction )