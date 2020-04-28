import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

brackets = [ '()', '[]', '{}' ]

def balanced_brackets( input_string ):
  """
  A function that checks if the brackets of a given string are balanced, using string replacement for each match

  Arguments:
      input_string { string } -- The string to validate

  Returns:
      boolean -- True or false if the string has balanced brackets
  """
  sanitized_input = ''.join( input_string.split() )
  while any( match in sanitized_input for match in brackets ):
    for bracket in brackets:
      sanitized_input = sanitized_input.replace( bracket, '' )
  return not sanitized_input

run_tests( balanced_brackets )
