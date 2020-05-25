import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def sorted_squares( numbers ):
  """ A function that squares all the numbers in an array, and returns them sorted

  Arguments:
      numbers { int[] } -- An array or sorted numbers which can be positive or negative

  Returns:
      int[] --  An array of positive numbers
  """
  squared_numbers = [ number**2 for number in numbers ]
  squared_numbers.sort()
  return squared_numbers

run_tests( sorted_squares )
