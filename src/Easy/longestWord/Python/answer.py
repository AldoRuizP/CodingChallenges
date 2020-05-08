import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests


from string import ascii_letters
whitelist = set ( ascii_letters + ' ' + '1234567890' )

def longest_word( sen ):
  """ A function that finds the longest word in a string, ignoring special characters

  Arguments:
      sen { string } -- The word to analyze

  Returns:
      [ string ] -- The first longest word in the string
  """
  words = ''.join( l for l in sen if l in whitelist ).split()
  return max( words , key=len)

run_tests( longest_word )
