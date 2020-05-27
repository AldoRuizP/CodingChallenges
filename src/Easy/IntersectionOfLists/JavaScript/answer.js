const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that finds an intersection between three lists
 * @param { number[][] } lists - An array of arrays. The inner arrays represent a sorted list
 * @returns { number } - The intersection of the three lists, or -1 if there's no intersection
 */
function findListIntersection( lists ){
  const listA = lists[0]
  const listB = lists[1]
  const listC = lists[2]
  const itemsMap = new Map()
  const maxItems = Math.max( listA.length, listB.length, listC.length )

  for( let i = 0; i < maxItems; i++ ){

    const itemA = listA[i]
    const itemB = listB[i]
    const itemC = listC[i]

    const itemACount = addToMap( itemsMap, itemA, 'a')
    const itemBCount = addToMap( itemsMap, itemB, 'b')
    const itemCCount = addToMap( itemsMap, itemC, 'c')

    if ( itemACount === 3 ) return itemA
    if ( itemBCount === 3 ) return itemB
    if ( itemCCount === 3 ) return itemC

  }

  return -1
}

/**
 * Helper function to add an item to a map
 * @param { map< char, set<number> } itemsMap - A map to keep track of the items that have been checked already
 * @param { number } item - The item to add to the map
 * @param { char } origin - A char to keep track of which list is the number coming from
 * @returns { number } - The number of lists the item has shown in
 */
function addToMap( itemsMap, item, origin ){
  if ( !item ) return 0
  const currentValue = itemsMap.has( item ) ? [...itemsMap.get(item), origin ] : [ origin ]
  const newValue = new Set( currentValue )
  itemsMap.set(item, new Set( newValue ) )
  return newValue.size
}




runTests( findListIntersection )
