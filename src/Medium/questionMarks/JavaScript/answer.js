const runTests = require('../../../RunTests/JavaScript/index')

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
    } else {
      firstNumber = parsed
      questionMarks = 0
    }  
  }

  return has10Sum && isValid

}

runTests( questionMarks )
