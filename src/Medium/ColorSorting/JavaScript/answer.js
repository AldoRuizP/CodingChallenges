const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that sorts an array of integers, in-place and in a single pass
 * @param { number[] } colors - An array of integers which may be 0, 1, or 2. 
 * @returns { number[] } colors - A sorted array of integers, which may be 0, 1, or 2. 
 */
function sortColors(colors) {

  let leftIndex = 0
  let midIndex = 0
  let rightIndex = colors.length - 1

  while (midIndex <= rightIndex) {
    
    const currentColor = colors[midIndex]

    switch (currentColor) {
      case 0:
        colors.swap(midIndex, leftIndex)
        leftIndex++
      case 1:
        midIndex++
        break
      case 2:
        colors.swap(midIndex, rightIndex)
        rightIndex--
        break
    }

  }

  return colors
}


// Helping function to swap items in an array
Array.prototype.swap = function (a, b) { let temp = this[a]; this[a] = this[b]; this[b] = temp }

runTests(sortColors)
