const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that for each kid check if there is a way to distribute extraCandies among 
 * the kids such that he or she can have the greatest number of candies among them
 * @param { number[] } arr - An array representing the candies each kid has, and the last element being the amount of extra candies
 * @returns { bool[] } - An array determining if each could have the max number of candies, given some extra candies
 */
function kidWithExtraCandies( arr ){
  const extraCandies = arr.pop()
  const kids = arr
  const maxCandies = Math.max( ...kids )
  return kids.map( kid => kid + extraCandies >= maxCandies )
}

runTests( kidWithExtraCandies )
