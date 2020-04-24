import json
from messages import print_fail_test_message, print_results_message
from paths import get_test_file_path

"""
Entry point for the testing suite
:param function_to_test: The invoking function to test agains the test cases
:return: void
"""
def run_tests(function_to_test):
  test_file_path = get_test_file_path()
  execute_tests( test_file_path, function_to_test )

"""
Read the test file and execute tests
:param test_file_path: The path where the test file of the invoking challenge is located
:param function_to_test: The function to test agains the test file
:return: void
"""
def execute_tests(test_file_path, function_to_test):
  test_file = open(test_file_path, 'r')
  total_cases = int(test_file.readline())

  failed_tests = 0
  expected_input = None
  expected_output = None
  line = test_file.readline()
  count = 1

  while line:
    if count % 2 == 0:
      expected_output = line
      success = execute_test( expected_input, expected_output, function_to_test )
      failed_tests = failed_tests + 1 if not success else failed_tests
    else: 
      expected_input = line
    line = test_file.readline()
    count += 1

  test_file.close()
  print_results_message( total_cases, failed_tests )

"""
Execute the test read from the test file, using the given function
:param expected_input: The input for this test, as read from the test file
:param expected_output: The output for this test, as read from the test file 
:param function_to_test: The function to test with the given input
:return: bool: States if the result of the test matches the expected
"""
def execute_test( expected_input, expected_output, function_to_test ):

  parsed_input = None
  parsed_output = None

  try:
    parsed_input = json.loads( expected_input )
  except:
    parsed_input = expected_input

  try:
    parsed_output = json.loads( expected_output )
  except:
    parsed_output = expected_output

  actual_output = function_to_test( parsed_input )
  result = parsed_output == actual_output

  if not result:
    print_fail_test_message( parsed_input, parsed_output, actual_output )
  
  return result
