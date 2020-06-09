import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def maximum_69_number( num ):
  """ A function that returns the maximum number you can get by changing at most one digit of a given number consisting of 6 and 9

  Args:
      num ( number ): A number consisting only of 6 and 9

  Returns:
      number:  The highest number that can be made given the input, just by changing one digit
  """
  adjusted = str(num).replace('6', '9', 1)
  return int(adjusted)

run_tests( maximum_69_number )
