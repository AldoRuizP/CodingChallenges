import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def zeroesAndOnes( s ):
  """ A function that removes any pair of adjacent '1' and '0' until no more matches are found, 
  then return the length of the minimum string
  
  Args:
      s ( string ): A string made out ouf '0', '1' and '*'

  Returns:
      number: The length of the minimal string after applying replacement
  """

  res = ""

  while res != s:
    res = s
    s = s.replace('01','')
    s = s.replace('10','')

  return len(res)

run_tests( zeroesAndOnes )
