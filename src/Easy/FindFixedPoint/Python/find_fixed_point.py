import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

"""
Find a fixed point in an array using a traditional for loop and the enumerate function
:param numbers: An array of sorted integers
:return The index of the first fixed point, or -1 if there is none
"""
def find_fixed_point_for_loop(numbers):
  for index, value in enumerate(numbers):
    if index == value:
      return value
  return -1

run_tests( find_fixed_point_for_loop )
