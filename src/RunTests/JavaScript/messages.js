/**
 * Log a message with the details of the test that failed
 * @param {string} input - A string with the raw input for the current test
 * @param {string} expectedOutput - A string with the raw expected output from the current test
 * @param {*} output - A variable with the actual results for the current tests
 */
const failedTest = function(input, expectedOutput, output){
  console.log('=====================================')
  console.log('\nTest Failed!')
  console.log('Input: ', input)
  console.log('Output: ', output)
  console.log('Expected Output: ', expectedOutput)
  console.log('\n')
}

/**
 * Log a message with the details of the executed tests
 * @param {number} totalTests - The total number of tests provided
 * @param {number} fails - The number of tests that failed
 */
const results = function(totalTests, fails){
  const success = totalTests - fails
  const result = fails === 0 ? 'Good Job!' : 'Keep Trying'
  console.log('=====================================')
  console.log('\nFinished running all tests.')
  console.log(`${fails} failed test(s).`)
  console.log(`${success} successful test(s).`)
  console.log('=====================================')
  console.log(`[${success}/${totalTests}] ${result}`)
}

module.exports = {
  failedTest,
  results
}