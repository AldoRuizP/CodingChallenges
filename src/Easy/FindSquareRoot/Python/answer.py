import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests


def square_root( number ):
  """
  Find the square root of a given integer without using any built in square/power functions

  Arguments:
      number { number } -- An integer to determine its square root

  Returns:
      number -- The square root of the given number, rounded to three decimals
  """
  x = number
  y = 1
  precision = 0.0001

  while ( get_relative_error( x, y ) > precision):
    x = (x + y) / 2
    y = number / x
  
  return round ( x, 3 )

def get_relative_error( x, y ):
  """
  A function that calculates the relative margin of error between two numbers 

  Arguments:
      x { number } -- The first number to get the margin of error
      y { number } -- The second number to get the margin of error

  Returns:
      number -- The margin or error between the two numbers
  """
  return ( x - y ) / x

run_tests( square_root )
