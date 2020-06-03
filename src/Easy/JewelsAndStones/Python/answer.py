import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def count_jewels( jewels_and_stones ):
  """ A function that counts the number of jewels, given a list of jewel types and the available stones

  Arguments:
      jewels_and_stones { string[] } -- An array of strings. First string represents the list of jewels, and the second string represents stones available

  Returns:
      number --  the number of available jewels
  """
  [J, S] = jewels_and_stones
  return sum( s in J for s in S )

run_tests( count_jewels )
