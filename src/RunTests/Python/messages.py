"""
Print a message with the details of the failed test
:param expected_input: The input for this test, as read from the test file
:param expected_output: The output for this test, as read from the test file 
:param actual_output: The actual output for this test, result of executing the given function
:return: void
"""
def print_fail_test_message( expected_input, expected_output, actual_output ):
  print('=====================================')
  print('\nTest Failed!')
  print('Input:', expected_input)
  print('Output:', actual_output)
  print('Expected Output: {}\n'.format(expected_output))

"""
Print a message with the results of the tests
:param total_tests: The total number of test cases
:param fails: The number of failed test cases
:return: void
"""
def print_results_message( total_tests, fails ):
  success = total_tests - fails
  result = 'Good Job!' if fails is 0 else 'Keep Trying'
  print('=====================================')
  print('\nFinished running all tests.')
  print(fails, 'failed test(s).')
  print(success, 'successful test(s).')
  print('\n=====================================\n')
  print('[{}/{}] {}\n'.format( success, total_tests, result ))

