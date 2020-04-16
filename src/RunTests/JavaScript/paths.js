/**
 * Get the file path of the tests that correspond to the challenge who invoked the function
 * @param {Error} stackTrace - A new error generated in the caller function, to keep a trace of the invoking function
 * @returns {string} A string with the path of the test file for the invoking function
 */
module.exports = function getTestFilePath( stackTrace ) {
  const callerFolder = _getCallerFolder( stackTrace )
  const challengeFolder = callerFolder.substring(0, callerFolder.lastIndexOf('/'))
  return `${challengeFolder}/tests`
}

/**
 * Get the path of the folder in which the invoking function is located
 * @param {Error} stackTrace - A new error generated in the caller function, to keep a trace of the invoking function
 * @returns {string} - A string with the path of the folder in which the invoking function is located
 */
function _getCallerFolder( stackTrace ) {
  const callerFile = _getCallerFile( stackTrace )
  return callerFile.substring(0, callerFile.lastIndexOf('/'))
}

/**
 * Get the absolute path of the file that invoked the tests
 * @param {Error} stackTrace - A new error generated in the caller function, to keep a trace of the invoking function
 * @returns {string} - A string with the path of the file in which the invoking function is located
 */
function _getCallerFile( stackTrace ) {
  const originalFunc = Error.prepareStackTrace
  let callerFile = undefined

  try {
    Error.prepareStackTrace = function (_, stack) { return stack }
    const currentFile = stackTrace.stack.shift().getFileName()

    while (stackTrace.stack.length) {
      callerFile = stackTrace.stack.shift().getFileName()
      if (currentFile !== callerFile) break
    }

  } catch (e) { }

  Error.prepareStackTrace = originalFunc
  return callerFile;
}