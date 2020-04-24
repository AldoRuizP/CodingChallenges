const fs = require('fs')
const readline = require('readline')
const generateMessage = require('./messages')

/**
 * Scan the tests file and execute the tests for the given function. 
 * @param {string} testsPath - A string with the path for the test files corresponding to this test
 * @param {func} testFunction - The function which will be used to test the cases
 * @returns {void}
 */
module.exports = function readAndExecuteTests(testsPath, testFunction) {

  let input = null
  let failures = 0
  let totalNumberOfTests = undefined
  const readInterface = _generateReadInterface(testsPath)

  readInterface.on('line', function (line) {
    if (!totalNumberOfTests) {
      totalNumberOfTests = parseInt(line)
    } else if (input){
      const testPassedSuccessfully = _performTest(input, line, testFunction)
      if (!testPassedSuccessfully) failures++
      input = null
    } else {
      input = line
    }
  })

  readInterface.on('close', function () {
    generateMessage.results(totalNumberOfTests, failures)
  })

}

/**
 * 
 * @param {string} rawInput - A string with the input for the current test as received from the file reader
 * @param {string} rawOutput - A string with the output for the current test as received form the file reader
 * @param {func} testFunction - The function which will be used to test the cases
 */
function _performTest(rawInput, rawOutput, testFunction) {

  let parsedInput
  let parsedOutput

  try{
    parsedInput = JSON.parse(rawInput)
  }catch(e){
    parsedInput = rawInput
  }

  try{
    parsedOutput = JSON.parse(rawOutput)
  }catch(e){
    parsedOutput = rawOutput
  }

  const actualOutput = testFunction(parsedInput)
  const matchingOutputs = parsedOutput.toString() === actualOutput.toString()
  if (!matchingOutputs) { 
    generateMessage.failedTest(parsedInput, parsedOutput, actualOutput)
  }
  return matchingOutputs
}

/**
 * 
 * @param {string} filePath - The file to be read
 * @return { readLineInterface } a readLine interface with the file provided by the file path loaded
 */
function _generateReadInterface(filePath) {
  return readline.createInterface({
    input: fs.createReadStream(filePath),
    console: false
  })
}
