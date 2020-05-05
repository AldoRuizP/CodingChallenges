const runTests = require('../../../RunTests/JavaScript/index')

function questionMarks( str ){
  sanitizedString = sanitizeString( str )

  console.log(str)
  console.log( sanitizedString )
}

function sanitizeString( str ){
  const noLetters = str.replace(/[A-Za-z]/g, '')
  const tripleMarks = replaceIterative( noLetters, '\\?\\?\\?', '_')
  const noExtraMarks = tripleMarks.replace(/\?/g,'')
  const noExtraDash = replaceIterative( noExtraMarks, '\\_\\_', '_')
  return noExtraDash
}

/**
 * Replace char or string iteratively until no more matches are present
 * @param { string } str - The string in which to search and replace
 * @param { string } find - The substring to find
 * @param { string } replacement - The string that will substitute the find
 */
function replaceIterative( str, find, replacement ){
  let res = str
  const re = new RegExp(find,'g');
  do {
    str = res
    res = str.replace( re, replacement )
  } while ( res !== str )
  return res
}


questionMarks( "acc?7??sss?3rr1????????????????????5abcdef3?3?3?3?3?3?3???4" )

//runTests( questionMarks )
