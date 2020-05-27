const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that finds an intersection between three lists
 * @param { number[][] } lists - A list of lists. The inner lists represent a sorted list
 * @returns number - The intersection of the three lists, or -1 if there's no intersection
 */
function temp( lists ){
  const intersection =  Array.from( lists[0] ).filter( item => lists[1].includes( item ) && lists[2].includes( item ) )
  return intersection[0] || -1
}


runTests( temp )
