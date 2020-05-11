import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def first_factorial( n ):
  """ A recursive function that calculates the factorial of a given number

  Arguments:
      n { number } -- The given number to calculate its factorial

  Returns:
      [ number ] -- The product of the current number times the previous number. Defaulted to 1 when n equals zero
  """
  return 1 if n == 0 else n * first_factorial( n - 1 )

run_tests( first_factorial )
