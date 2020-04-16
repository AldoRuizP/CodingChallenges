import sys
import os
import pprint

def run_tests(function_to_test):
  test_file_path = get_test_file_path()
  execute_tests( test_file_path, function_to_test )

def get_test_file_path():
  namespace = sys._getframe(1).f_globals
  abs_path = namespace['__file__']
  test_file_path = abs_path.rsplit('Python', 2)[0] + 'tests'
  return test_file_path

def execute_tests(test_file_path, function_to_test):
  test_file = open(test_file_path, 'r')
  count = 0
  total_cases = 0

  while True:
    line = test_file.readline()
    expected_input = None
    expected_output = None

    if not line: 
      break
    line = line

    if count == 0:
      total_cases = int(line)

    if count > 0 and count % 2 == 0:
      expectedOutput = line
      execute_test( expected_input, expected_output, function_to_test )

    else: 
      expectedInput = line

    count += 1

  
  test_file.close()

def execute_test( expected_input, expected_output, function_to_test ):
  print(expected_input)
  print(expected_output)
  print(function_to_test)
