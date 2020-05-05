import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def find_intersection( str_array ):
  """ A function that scans two stringified arrays and returns a new string with all the matches between the two arrays

  Arguments:
      str_array { string[] } -- An array of strings with two elements. Each element is a stringified array of numbers

  Returns:
      [ string ] -- A string with all the matching elements that the two arrays share
  """
  array_1 = parse_string_array( str_array[0] )
  array_2 = parse_string_array( str_array[1] )
  matches = set(array_1) & set(array_2)
  sorted_matches = repr ( sorted(matches) )
  return sorted_matches.replace(' ', '').replace('[','').replace(']','') if matches else False

def parse_string_array( string_array ):
  """ A function that receives a stringified array of numbers, and parses it into a proper number array

  Arguments:
      string_array { string } -- A stringified array of numbers

  Returns:
      [ nubmer[]  -- An array of numbers
  """
  return map(int, string_array.split(', '))

run_tests( find_intersection )
