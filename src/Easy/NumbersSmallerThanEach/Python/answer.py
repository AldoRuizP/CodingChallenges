import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def my_function( numbers ):
  """ A function that finds how many items are smaller than each item in a given array

  Args:
      numbers (number[] ):  An array of numbers

  Returns:
      number[]: An array with the number of elements smaller than each item in the original array
  """

  counts = []
  for n in numbers:
    smaller_numbers =  [ i < n for i in numbers ]
    counts.append( sum( smaller_numbers) )

  return counts

run_tests( my_function )
