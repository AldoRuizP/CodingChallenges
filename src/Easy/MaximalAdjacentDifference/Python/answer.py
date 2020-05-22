import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def array_maximal_adjacent_difference( arr ):
  """ A function that returns the max difference between any of the elements in the array

  Arguments:
      arr { number[] } -- An array of numbers 

  Returns:
      number -- The max difference between any of its adjacent element
  """
  length = len(arr) - 1
  diffs = [ abs( arr[i] - arr[i+1] ) for i in range( length ) ]
  return max(diffs)

run_tests( array_maximal_adjacent_difference )
