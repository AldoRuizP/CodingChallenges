import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def sort_colors( colors ):
  """ A function that sorts an array of integers, in-place and in a single pass

  Arguments:
      colors { int[] } -- An array of integers which may be 0, 1, or 2. 

  Returns:
      [ int[] ] -- A sorted array of integers, which may be 0, 1, or 2. 
  """

  left = 0
  mid = 0
  right = len( colors ) - 1

  while mid <= right:

    if colors[mid] == 0:
      colors[left], colors[mid] = colors[mid], colors[left]
      left += 1
      mid += 1
    elif colors[mid] == 1:
      mid += 1
    else: 
      colors[mid], colors[right] = colors[right], colors[mid]
      right -= 1
   
  return colors

run_tests( sort_colors )
