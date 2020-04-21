## About

A bunch of programing exercises I gather from around the internet. 

## Structure

- The `src` folder is conformed of the challenges, grouped by difficulty.
- Each challenge has its own readme with the description of the challenge, a starting point and constrains (if any) 
- Each challenge has its own `tests` file. The structure of the file is as follows:
    - The first line indicates the number of test cases
    - The following lines contain the actual test cases
    - Each test case is conformed of two lines. The first line is the input, and the second line the expected output
    - Assuming the tests for challenge which consists in adding all the numbers in a string of numbers, a test file would look like this:
    ```
    3       // This means we have three test cases
    123     // The input of the fist test 
    6       // The expected output of the first test
    101     // The input of the second test
    2       // The expected output of the second test
    0000001 // The input of the third test
    1       // The expected output of the third test
    ```

## Testing a function

- Each challenge must contain a `tests` file
- To execute the tests using your challenge solution, the following line must be added at the end of your solution file
``` javascript
// For JavaScript 
const runTests = require('../../../RunTests/JavaScript/index')
runTests( ${FUNCTION_NAME} )
```

``` python
# For python
import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python' )
from run_test import run_tests
run_tests( {FUNCTION_NAME} )
```

## Adding a Challenge

- To add a new challenge run the following command
``` bash
chmod 755 ./scripts/add_challenge.sh # To grant execute permission to the script
./scripts/add_challenge.sh
```
Follow the prompted instructions.

Make sure to write "DONE" after you finish multiline input in order to continue to the next step.
If you would like to leave the input empty, just write "DONE".