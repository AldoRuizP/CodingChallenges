const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that receives an ip address and returns its defanged version
 * @param { string } ipAddress - A stringified ip address
 * @returns { string } - The defanged ip address 
 */
function defangIPAddress( ipAddress ){
  return ipAddress.replace(/\./g,'[.]')
}

runTests( defangIPAddress )
