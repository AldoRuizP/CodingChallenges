import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def kid_with_max_candies( arr ):
  """ A function that for each kid check if there is a way to distribute extraCandies among 
  the kids such that he or she can have the greatest number of candies among them
  
  Args:
      arr ( number[] ): An array representing the candies each kid has, and the last element being the amount of extra candies

  Returns:
      bool[]: An array determining if each could have the max number of candies, given some extra candies
  """
  extra_candies = arr.pop()
  max_candies = max( arr )
  return [candy + extra_candies >= max_candies for candy in arr]

run_tests( kid_with_max_candies )
