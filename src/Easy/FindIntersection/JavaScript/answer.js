const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that scans two array in order to find all the intersected elements they have
 * @param { string[] } stringArray - An array with two strings, which represent the arrays to scan
 * @returns { string | boolean } - A string listing all the intersected elements, or a false value if there are none
 */
function findIntersection( stringArray ){
  const firstArray  = stringArray[0].split(', ')
  const secondArray = stringArray[1].split(', ')
  const matches = firstArray.filter( number => secondArray.includes(number)).join()
  return matches || false
}

runTests( findIntersection )
