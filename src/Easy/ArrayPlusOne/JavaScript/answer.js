const runTests = require('../../../RunTests/JavaScript/index')

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
