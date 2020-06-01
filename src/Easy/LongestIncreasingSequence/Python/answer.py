import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def longest_increasing_subsequence( arr ):
  """ A function that returns the longest subsequence, not necessarily contiguous, in an array

  Arguments:
      arr { number[] } -- An array of integers, in random order

  Returns:
      number -- The longest increasing subsequence of the given array
  """
  lengths = [1] * len(arr)

  for i in range( 1, len(arr) ):
    for j in range( 0, i ):
      lengths[i] = max( lengths[i], lengths[j] + 1 ) if arr[i] > arr[j] else lengths[i]

  return max( lengths )

run_tests( longest_increasing_subsequence )
