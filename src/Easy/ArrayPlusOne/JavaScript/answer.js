const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that receives an array of integers. Each element in the array represent a digit in a larger number
 * The function returns an array representing the number after adding one
 * @param { number[] } arr - An array of numbers that represent a larger integer
 * @returns { number[] } - An array of numbers that represent the given large number after adding one
 */
function arrayPlusOne( arr ){
  let carry = 1

  const result =  arr.slice().reverse().map( number => {
    const tempSum = number + carry
    const isOverflow = tempSum > 9
    carry = isOverflow ? 1 : 0
    return isOverflow ? 0 : tempSum
  })


  if ( carry > 0 ) result.push(carry)
  return result.reverse()
}

runTests( arrayPlusOne )
