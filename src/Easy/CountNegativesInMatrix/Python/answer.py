import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def number_of_negatives( grid ):
  """ A function that returns the number of negative values in a matrix

  Args:
      grid ( number[][] ): An array of arrays on integers

  Returns:
      number: The total number of negative values in the given matrix
  """

  negatives = 0
  for row in grid:
    for num in row:
      if num < 0:
        negatives += 1

  return negatives

run_tests( number_of_negatives )
