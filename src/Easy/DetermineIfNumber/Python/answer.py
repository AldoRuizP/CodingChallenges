import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

import re

def determine_if_number( str ):
  """ A function that scans a string to determine if it represents a valid number, which could be integer, 
  negative, floating, scientific notation, etc

  Arguments:
      str { string } -- The string to scan

  Returns:
      boolean -- A boolean determining if the string represents a valid number
  """
  return re.search("^-?\d*\.?\d+[e?\d+]?\d*$", str) is not None

run_tests( determine_if_number )
