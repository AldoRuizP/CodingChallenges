import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def reverse_string( str ):
  """ A function that receives a string and reverses it

  Arguments:
      str { string } -- The string to reverse

  Returns:
      [string ] -- The reversed string
  """
  return str[::-1]

run_tests( reverse_string )
