import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def max_product( nums ):
  """ A function that given the array of integers nums, 
  returns the maximum value that can be obtain for multiplying two different elements in the array

  Args:
      nums ( number[] )

  Returns:
      number
  """
  n1 = max( nums )
  nums.pop( nums.index( n1) )
  n2 = max( nums )
  return (n1-1) * (n2-1)

run_tests( max_product )
