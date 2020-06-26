const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that calculates the maximum number of balanced strings which can be made from a given balanced string
 * @param { string } s - A balanced string which consists only  letters "R" or "L"
 * @returns { number } maximumStrings - The max number of balanced strings that can be made based on the given string
 */
function splitBalancedString(s) {

  let maximumStrings = 0
  let charCount = 0

  for (let i = 0; i < s.length; i++) {
    charCount = s.charAt(i) === 'R' ? charCount + 1 : charCount - 1
    if (!charCount) maximumStrings++
  }

  return maximumStrings

}

runTests(splitBalancedString)
