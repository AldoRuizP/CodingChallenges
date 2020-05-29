import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def find_single( numbers ):
  """ A function that scans an array of numbers with duplicated items to find the one item without a duplicate value

  Arguments:
      numbers { num[]} -- An array of numbers

  Returns:
      num -- A number from the array that has no duplicate
  """
  return [ n for n in numbers if numbers.count( n ) == 1 ][0]

run_tests( find_single )
