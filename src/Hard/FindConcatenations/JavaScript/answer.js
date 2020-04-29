const runTests = require('../../../RunTests/JavaScript/index')

function findCompoundWords( words ){

  const wordsMappedByLength = new Map()

  words.sort().forEach( word => {
    const wordLength = word.length
    const newLengthList = wordsMappedByLength.has( wordLength ) ? [ ...wordsMappedByLength.get( wordLength), word ] : [ word ]
    wordsMappedByLength.set( wordLength, newLengthList )    
  })

  const possibleCombinations = findPossibleSums( [...wordsMappedByLength.keys()] )




}

function findPossibleSums( numbers ){
  const combinationsMap = new Map()
  numbers.forEach( (number, index) => {
    const subArray = numbers.slice(0, index)

    console.log(' for this number =====> ', number)
    const combinations = []
    findCombinations( [] , 0, number, number, combinations )

    console.log(' ------------ finished this part ------------' )
    combinationsMap.set( number, combinations )
  })
  console.log(combinationsMap)
}


function findCombinations( arr, index, num, reducedNum, answers ){

  if (reducedNum < 0 ) return answers
  
  if (reducedNum === 0 ){
    answers.push( arr.slice( 0, index ) )
    return
  }

  let prev = index === 0 ? 1 : arr[index - 1]

  for( let k = prev; k < num + 1; k++ ){
    arr[index] = k
    findCombinations( arr, index + 1, num, reducedNum - k, answers)
  }
}

findCompoundWords( [, "a", "tech", "lead", "techlead", "cat", "cats", "dog", "catsdog"] )


/*
def findCombinationsUtil(arr, index, num, reducedNum): 
  
  # Base condition 
  if (reducedNum < 0): 
    return; 

  # If combination is found, print it 
  if (reducedNum == 0): 
    for i in range(index): 
      print(arr[i], end = " "); 
    return; 

  # Find the previous number stored in arr[]. It helps in maintaining increasing order 
  prev = 1 if(index == 0) else arr[index - 1]; 

  # note loop starts from previous number i.e. at array location index - 1 
  for k in range(prev, num + 1): 
    arr[index] = k; 
    findCombinationsUtil(arr, index + 1, num, reducedNum - k); 
  
# Function to find out all  
# combinations of positive numbers  
# that add upto given number. 
# It uses findCombinationsUtil()  
def findCombinations(n): 
      
    # array to store the combinations 
    # It can contain max n elements 
    arr = [0] * n; 
  
    # find all combinations 
    findCombinationsUtil(arr, 0, n, n); 
*/





//runTests( myFunction )