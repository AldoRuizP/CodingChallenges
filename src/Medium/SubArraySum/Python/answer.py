import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def sub_array_sum( numbers ):
  """ Finds a sub array that sums up to the first item in the original array

  Arguments:
      numbers { number[] } -- An array of integers in which the first item is the target sum and the rest contains a sub array that sums up
      to the target

  Returns:
      number[] -- The sub array which sums up to the target
  """
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

run_tests( sub_array_sum )
