import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def binary_reverse( string ):
  """ A function that receives a stringified positive integer and returns its binary reversal integer representation

  Arguments:
      string { str } -- The string representing a positive integer 

  Returns:
      [integer] -- The integer which correspond to the binary reversal of the input
  """
  n = bin(int(string))[2:]
  missing_zeroes = 8 - (len(n) % 8) if len(n) % 8 != 0 else 0
  k = (( '0' * missing_zeroes ) + n)[::-1]
  return int( k, 2 )

run_tests( binary_reverse )
