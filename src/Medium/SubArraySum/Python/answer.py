import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests


def my_function( numbers ):
  target = numbers.pop(0)
  low_index = 0
  high_index = 1
  current_sum = 0

  while current_sum != target:
    high_index += 1
    current_sum = sum( numbers[ low_index:high_index ] )
    while current_sum > target:
      low_index += 1
      current_sum = sum( numbers[ low_index:high_index ] )
    
  return numbers[low_index:high_index]

run_tests( my_function )
