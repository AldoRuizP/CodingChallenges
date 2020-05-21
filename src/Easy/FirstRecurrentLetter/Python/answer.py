import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def first_recurrent_letter( str ):
  """ A function that scans a given string in order to determine what is its first recurrent letter

  Arguments:
      str { string } -- The string to scan in order to fin the first repeated character

  Returns:
      string -- A string with the first repeated character, 'None' if none was found
  """
  letters_set = set()

  for letter in str:
    if letter in letters_set:
      return letter
    else:
      letters_set.add(letter)

  return "None"

run_tests( first_recurrent_letter )
