import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

from string import ascii_lowercase
vowels = ['a','e','i','o','u']

def letter_changes( str ):
  """ A function that shifts all the letters of a string to its next letter in the alphabet, and then uppercase all the vowels

  Arguments:
      str { string } -- The string to convert

  Returns:
      [ string ] -- The converted string
  """
  return ''.join( map( shift_and_parse, str) )

def shift_and_parse( char ):
  """ A helper function to shift and capitalize a letter 

  Arguments:
      char { chr } -- The letter to be shifted and capitalized

  Returns:
      [ chr ] -- The shifted and capitalized letter
  """
  if char in ascii_lowercase:
    char = ascii_lowercase[0] if char == ascii_lowercase[-1] else chr(ord(char)+1)
  return char.upper() if char in vowels else char


run_tests( letter_changes )
