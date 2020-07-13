const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that given a list of paths, finds a the destination city
 * @param { string[][] } paths - list of paths, where is path is conformed by origin and destination
 * @returns { string } destination - the destination city
 */
function destinationCities(paths) {
  const origins = paths.map(path => path[0])

  let destination

  for (let path of paths) {
    const city = path[1]
    if (!destination && !origins.includes(city)) {
      destination = city
    }
  }

  return destination
}

runTests(destinationCities)
