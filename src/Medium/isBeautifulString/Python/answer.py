import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests


from string import ascii_lowercase

def is_beautiful_string( input_string ):
  """
  Determine if a given string is beautiful

  Arguments:
      input_string {string} -- A string to analyze if its beautiful or not

  Returns:
      boolean -- Indicating if the string is beautiful or not
  """
  for i, char in enumerate( ascii_lowercase[1:], 1):
    if input_string.count( char ) >  input_string.count( ascii_lowercase[ i-1 ] ):
      return False
  return True

run_tests( is_beautiful_string )
