import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def array_xor( params ):
  """ A function which given an integer n and an integer start, 
     defines an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length, 
     and then returns the bitwise XOR of all elements of nums.
  Args:
      params ( number[]): An array of two elements, First element is the length of the array and the second is the start

  Returns:
      number: The resulting value after the operation
  """
  n = params[0]
  start = params[1]
  res = 0
  for i in range(n):
    res ^= start + 2 * i
  return res

run_tests( array_xor )
