const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that calculates the minimum editing distance of two given strings
 * @param { string[] } strings - An array with two strings to calculate its editing distance
 * @returns { number } - The editing distance of the two given arrays
 */
function editingDistance(strings) {

  const s1 = strings[0]
  const s2 = strings[1]
  const temp = Array(s1.length + 1).fill(null).map(() => Array(s2.length + 1).fill(null));

  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 && j === 0) temp[i][j] = 0
      else if (i === 0) temp[i][j] = temp[i][j-1] + 1
      else if (j === 0) temp[i][j] = temp[i-1][j] + 1
      else if ( s1[i-1] == s2[j-1] ) temp[i][j] = temp[i-1][j-1]
      else temp[i][j] = 1 + Math.min( temp[i-1][j-1], temp[i-1][j], temp[i][j-1] )
    }
  }

  return temp[s1.length][s2.length]
}


runTests( editingDistance )
