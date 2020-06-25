import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def decompress_encoded_list( nums ):
  """ A function that decompressed a run-length encoded lists and returns it

  Args:
      nums ( number[] ): A list compressed with run-length encoding

  Returns:
      number[]: The list after being decompressed
  """
  decompressed = []

  for i in range( 0, len(nums), 2 ):
    freq = nums[i]
    val = nums[i+1]
    decompressed.extend( [val] * freq )

  return decompressed

run_tests( decompress_encoded_list )
