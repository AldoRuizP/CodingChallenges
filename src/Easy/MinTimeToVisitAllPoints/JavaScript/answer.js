const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that finds the minimum time in seconds to visit all points in a given array of coordinates
 * @param { number[] } points - An array of points in a plain
 * @returns { number } seconds - The amount of seconds needed to go from the first point to the last
 */
function minTimeToVisitAllPoints(points) {
  let seconds = 0

  for (let i = 1; i < points.length; i++) {
    const diffX = Math.abs(points[i][0] - points[i - 1][0])
    const diffY = Math.abs(points[i][1] - points[i - 1][1])
    seconds += Math.max(diffX, diffY)
  }

  return seconds
}

runTests(minTimeToVisitAllPoints)
