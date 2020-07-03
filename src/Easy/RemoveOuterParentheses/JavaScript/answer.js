const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that given a valid parenthesis string,
 * removes the outermost parentheses of every primitive string in the primitive decomposition of S.
 * @param { string } S - a valid parentheses string 
 * @returns { string } resultString - string s after removing the outermost parentheses of every primitive string
 */
function removeOuterParentheses(S) {

  let resultString = ""
  let currentPrimitiveString = ""
  let currentPrimitiveStack = []


  S.split('').forEach(char => {
    const lastIndex = currentPrimitiveStack.length - 1
    const mostRecentChar = currentPrimitiveStack[lastIndex] || char

    if (mostRecentChar === char) {
      currentPrimitiveStack.push(char)
    } else {
      currentPrimitiveStack.pop()
    }

    if (currentPrimitiveStack.length) {
      currentPrimitiveString += char
    } else {
      resultString += currentPrimitiveString.substr(1)
      currentPrimitiveString = ""
    }

  })

  return resultString
}

runTests(removeOuterParentheses)
