import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def list_intersection( lists ):
  """ A function that finds an intersection between three lists

  Arguments:
      lists { number[][] } --  A list of lists. The inner lists represent a sorted list

  Returns:
      number -- The intersection of the three lists, or -1 if there's no intersection
  """
  combined_list = list( set( lists[0] ) & set( lists[1] ) & set( lists[2] ) ) or [ -1 ]
  return combined_list[0]

run_tests( list_intersection )
