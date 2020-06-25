const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that decompressed a run-length encoded lists and returns it
 * @param { number[] } nums - A list compressed with run-length encoding
 * @returns { number[]  } decompressed - The list after being decompressed
 */
function DecompressEncodedList( nums ){
  let decompressed = []
  for(let i = 0; i < nums.length; i+=2){
    const freq = nums[i]
    const val = nums[i+1]
    const temp = new Array( freq ).fill( val )
    decompressed.push( ...temp )
  } 
  return decompressed
}

runTests( DecompressEncodedList )
