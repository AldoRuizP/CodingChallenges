const runTests = require('../../../RunTests/JavaScript/index')

const bracketsMap = {
  '(' : ')',
  '[' : ']',
  '{' : '}'
}

/**
 * A function that verifies if a string of brackets is balanced
 * @param { string } inputString - The string to validate
 * @returns { boolean } - True or false if the string has balanced brackets
 */
function balancedBrackets( inputString ){
  const bracketStack = []

  inputString.split('').forEach( char => {
    const lastItemInStack = bracketStack.pop()
    const closingForLastItem = bracketsMap[lastItemInStack]
    if ( char !== closingForLastItem ){
      if ( lastItemInStack ) bracketStack.push(lastItemInStack)
      bracketStack.push(char)
    }
  })

  return bracketStack.length === 0
}

runTests( balancedBrackets )
