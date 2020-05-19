import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def array_plus_one( arr ):
  """  A function that receives an array of integers. Each element in the array represent a digit in a larger number.
  The function returns an array representing the number after adding one

  Arguments:
      arr { int[] } --  An array of numbers that represent a larger integer

  Returns:
      int[] -- An array of numbers that represent the given large number after adding one
  """
  number = int(''.join( map( str,arr ) ) ) + 1
  return [int(i) for i in str(number)]

run_tests( array_plus_one )
