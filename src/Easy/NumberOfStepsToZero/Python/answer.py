import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def my_function( n ):
  """ A function that count the number of needed operations to turn a given number into zero

  Args:
      n ( integer ): A positive integer

  Returns:
      integer: A positive integer
  """
  steps=0

  while n:
    if n % 2:
      n-=1
    else: 
      n = n/2
    steps += 1
    
  return steps

run_tests( my_function )
