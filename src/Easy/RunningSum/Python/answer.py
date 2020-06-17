import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

import itertools

def running_sum( numbers ):
  """ A function that given an array, returns the sum of each element until i

  Args:
      numbers ( number[] ):  An array of integers

  Returns:
      number[]: An array of integers with the running sum of the given array
  """
  return list(itertools.accumulate( numbers ))


run_tests( running_sum )
