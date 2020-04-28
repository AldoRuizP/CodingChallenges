const runTests = require('../../../RunTests/JavaScript/index')

/**
 * Find a subarray that sums up to the first item in the original array and returns it
 * @param { integer[] } numbers - An array of integers, where the first item is the target and the rest contains a subarray which sums up to target
 * @returns { integer[] } subArray - The subarray which sums up to target
 */
function subArraySum( numbers ){

  const target = numbers.shift()
  let subArray = []
  let currentSum = 0
  let index = 0

  while ( currentSum !== target ) {
    const currentNumber = numbers[index++]
    currentSum += currentNumber
    subArray.push( currentNumber )
    while( currentSum > target ) currentSum -= subArray.shift()
  }

  return subArray
}

runTests( subArraySum )
