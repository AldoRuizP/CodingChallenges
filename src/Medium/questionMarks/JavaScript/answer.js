const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that determines if a string of numbers, letters and question marks has exactly three question marks between each pair of 
 * numbers that add up to 10
 * @param { string } str - The input string to validate
 * @returns { boolean } - True or false if all the pairs of numbers that add up to 10, have exactly three question marks in between them
 */
function questionMarks(str) {

  let has10Sum = false
  let isValid = true
  let arr = str.split('')
  let firstNumber = null
  let questionMarks = 0

  for (let i = 0; i < arr.length; i++) {
    const currentChar = arr[i]
    const parsed = parseInt( currentChar )
    const isNumber = currentChar >= '0' && currentChar <= '9'
    if ( !firstNumber && isNumber ) firstNumber = parsed
    if ( firstNumber && currentChar === '?' ) questionMarks += 1
    if ( ! ( firstNumber && isNumber ) ) continue
    
    const sum = firstNumber + parsed
    if ( !has10Sum ) has10Sum = sum === 10

    if ( sum === 10 ){
      isValid = questionMarks === 3
      questionMarks = 0
    } else {
      firstNumber = parsed
      questionMarks = 0
    }  
  }

  return has10Sum && isValid

}

runTests( questionMarks )
