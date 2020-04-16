const readAndExecuteTests = require('./runTest')
const getTestFilePath = require('./paths')

module.exports = function runTests(testFunction) {
  const testsPath = getTestFilePath( new Error() )
  readAndExecuteTests(testsPath, testFunction)
}
