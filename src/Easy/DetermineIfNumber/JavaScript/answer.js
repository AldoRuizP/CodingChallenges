const runTests = require('../../../RunTests/JavaScript/index')

function determineIfNumber( str ){
  const regex = new RegExp(/^-?\d*\.?\d+[e?\d+]?\d*$/, 'g')
  return regex.test( str )
}

runTests( determineIfNumber )
