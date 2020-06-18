import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def defang_address( address ):
  """ A function that receives an ip address and returns its defanged version

  Args:
      address ( string ): An ip address

  Returns:
      string: The defanged ip address
  """
  return address.replace('.','[.]')

run_tests( defang_address )
