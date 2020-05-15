import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def my_function( string ):
  """ A function that returns the longest substring of nonrepeating characters in a string

  Arguments:
      string { str } -- Theinput string to analyze

  Returns:
      [ str ] -- The length of the longest substring of nonrepeating characters
  """
  
  str_list = []
  max_length = 0
  
  for x in string:
    if x in str_list:
      str_list = str_list[ str_list.index(x) + 1 : ]
            
    str_list.append(x) 
    max_length = max(max_length, len(str_list))
        
  return max_length


run_tests( my_function )
