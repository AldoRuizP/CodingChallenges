const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that checks if an integer is also a palindrome, without parsing it to string
 * @param { number } number - An integer number
 * @returns { boolean } - True or false if the given integer is a palindrome
 */
function isNumberPalindrome( number ){
  const digits = getNumberDigits( number )
  return checkPalindromeArray( digits )
}

/**
 * Helper function that parses an integer number into an array of numbers
 * @param { number } number - An integer number
 * @returns { number[] } digits - An array of numbers representing each digit of the given number
 */
function getNumberDigits( number ){

  const digits = []
  let dividend = 1
  let current = number

  while( current >= 1) {
    digits.push( parseInt( current % 10 ) )
    dividend *= 10
    current = number / dividend
  }

  return digits
}


/**
 * Helper function that checks if a given array is palindrome
 * @param { *[] } arr - An array of items
 * @returns { boolean } - True or false  if the array is a  palindrome
 */
function checkPalindromeArray( arr ){
  for( let i = 0; i < arr.length / 2; i++ ){
    const oppositeIndex = arr.length - 1 - i
    if ( arr[i] !== arr[oppositeIndex] ) return false
  }
  return true
}


runTests( isNumberPalindrome )
