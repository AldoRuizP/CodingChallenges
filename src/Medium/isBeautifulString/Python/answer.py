import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests


from string import ascii_lowercase

"""
Determine if a given string is beautiful
:param input_string: A string to analyze if its beautiful or not
:return Boolean indicating if the string is beautiful or not
"""
def my_function( input_string ):
  for i, char in enumerate( ascii_lowercase[1:], 1):
    if input_string.count( char ) >  input_string.count( ascii_lowercase[ i-1 ] ):
      return False
  return True

run_tests( my_function )
