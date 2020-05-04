const runTests = require('../../../RunTests/JavaScript/index')

function findIntersection( stringArray ){
  const firstArray  = stringArray[0].split(', ')
  const secondArray = stringArray[1].split(', ')
  const matches = firstArray.filter( number => secondArray.includes(number)).join()
  return matches || false
}

runTests( findIntersection )
