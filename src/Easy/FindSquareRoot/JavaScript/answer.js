const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that calculates the square root of a given number without using sqrt or pow built in functions
 * @param {*} number - The number to find its square root to three decimals precision
 * @returns { number } parsedAnswer - The square root of the number, rounded to three decimal points
 */
function myFunction( number ){
  squareRoot = findSquareRoot( number, 0.001 )
  const answer = squareRoot.toFixed(3)
  const parsedAnswer = answer % 1 === 0 ? Math.round(answer) : answer
  return parsedAnswer
}

/**
 * Find the square root of a number with a given precision
 * @param { number } number - The number to find its square root
 * @param { number } precision - The precision wanted for the square root
 * @return { number } x - The square root of the number, matching the required precision
 */
function findSquareRoot( number, precision ){
  let x = number
  let y = 1

  while( getRelativeError(x, y) > precision) {
    x = (x + y) / 2
    y = number / x
  }

 return x
}

/**
 * A function that calculates the relative margin of error between two numbers 
 * @param { number } x - The first number to get the margin of error
 * @param { number } y - The second number to get the margin of error
 * @returns { number } - The margin or error between the two numbers
 */
function getRelativeError( x, y ){
  return ( x - y) / x
}

runTests( myFunction )
