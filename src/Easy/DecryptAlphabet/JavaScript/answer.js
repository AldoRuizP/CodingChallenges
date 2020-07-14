const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that decrypts a message
 * @param { string } s - Encrypted string
 * @returns { string } msg - Decrypted message
 */
function myFunction(s) {

  const FIRST_ASCII = 96
  let msg = '';

  for ( let i = 0; i < s.length; i++ ) {

    let encrypted = s[i]

    if( s[i+2] === '#' ){
      encrypted = s.slice( i, i+2 )
      i += 2
    }

    const asciiValue = parseInt(encrypted) + FIRST_ASCII
    msg += String.fromCharCode(asciiValue)
  }
  return msg
}

runTests(myFunction)
