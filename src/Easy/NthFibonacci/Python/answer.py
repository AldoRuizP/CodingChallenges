import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def nth_fibonacci( n ):
  """ A function that returns the nth element of the fibonacci sequence

  Arguments:
      n { number } -- The index of the fibonacci element to return

  Returns:
      [number] -- The nth element of the fibonacci sequence
  """
  return n if n < 2 else nth_fibonacci( n - 1) + nth_fibonacci( n - 2 )

run_tests( nth_fibonacci )
