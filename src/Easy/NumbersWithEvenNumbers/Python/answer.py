import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def numbers_with_even_digits( nums ):
  """ A function that calculates how many of the numbers in an array contain an even number of digits. 

  Args:
      nums ( number []): An array of numbers

  Returns:
      number:  The amount of numbers with even digits
  """
  return sum(len(str(n)) % 2 == 0 for n in nums)

run_tests( numbers_with_even_digits )
