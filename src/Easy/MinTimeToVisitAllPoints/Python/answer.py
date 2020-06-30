import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def minTimeToVisitAllPoints( points ):
  """ A function that finds the minimum time in seconds to visit all points in a given array of coordinates

  Args:
      points ( number[] ): An array of points in a plain

  Returns:
      number: The amount of seconds needed to go from the first point to the last
  """

  seconds = 0
  for i in range(1, len(points), 1):
    diffX = abs( points[i][0] - points[i-1][0])
    diffY = abs( points[i][1] - points[i-1][1])
    seconds += max( diffX, diffY)
  return seconds

run_tests( minTimeToVisitAllPoints )
