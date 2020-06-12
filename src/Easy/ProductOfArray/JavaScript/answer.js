const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that calculates the product of all the elements in the array except itself and returns it an a new array
 * @param { number[] } arr - An array of integers
 * @returns { number[] } products - An array of integers 
 */
function productOfArray( arr ){

  const leftSideProducts  = []
  const rightSideProducts = []
  const products = []
  
  let currentLeftProduct = 1
  let currentRightProduct = 1

  for( let leftIndex = 0; leftIndex < arr.length; leftIndex++ ){
    const rightIndex = arr.length - 1 - leftIndex
    leftSideProducts[ leftIndex ]   = ( currentLeftProduct )
    rightSideProducts[ rightIndex ] = ( currentRightProduct )
    currentLeftProduct  *= arr[ leftIndex ]
    currentRightProduct *= arr[ rightIndex ]
  }

  for( let i = 0; i < arr.length; i++ ){
    const currentProduct = leftSideProducts[i] * rightSideProducts[i]
    products.push( currentProduct )
  }

  return products
}

runTests( productOfArray )
