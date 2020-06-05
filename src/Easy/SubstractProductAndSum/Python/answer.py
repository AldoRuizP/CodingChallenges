import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

import math

def product_minus_sum( n ):
  """ A function that scans each digit of a number then sums then and also multiplies them, and finally returns the substraction of both

  Args:
      n ( number ): The number to process

  Returns:
      number: The substraction of the product minus the sum
  """
  p = 1
  s = 0
  while n > 0:
    c = n % 10
    p = p * c
    s = s + c
    n = math.floor( n / 10 )
  return p - s

run_tests( product_minus_sum )
