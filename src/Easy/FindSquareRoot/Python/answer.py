import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

"""
Find the square root of a given integer without using any built in square/power functions
:param number: An integer to determine its square root
:return The square root of the given number, rounded to three decimals
"""
def my_function( number ):
  x = number
  y = 1
  precision = 0.0001

  while ( get_relative_error( x, y ) > precision):
    x = (x + y) / 2
    y = number / x
  
  return round ( x, 3 )

"""
A function that calculates the relative margin of error between two numbers 
:param number: x - The first number to get the margin of error
:param number: y - The second number to get the margin of error
:return number: - The margin or error between the two numbers
 */
"""
def get_relative_error( x, y ):
  return ( x - y ) / x

run_tests( my_function )
