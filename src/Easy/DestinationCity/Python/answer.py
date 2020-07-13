import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def destinationCity( paths ):
  """ A function that given a list of paths, finds a the destination city

  Args:
      paths ( string[][] ): list of paths, where is path is conformed by origin and destination

  Returns:
      string: the destination city
  """

  origins = [ path[0] for path in paths ]
  destination = None

  for path in paths:
    city = path[1]
    if not destination and not city in origins:
      destination = city

  return destination


run_tests( destinationCity )
