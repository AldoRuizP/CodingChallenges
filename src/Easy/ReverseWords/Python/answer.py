import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests


def reverse_words( str ):
  """ A function that reverses the words in a string while keeping word order

  Arguments:
      str { string } --  The string to process

  Returns:
      string  -- The original string with each word reversed
  """
  reversed_words = [ word[::-1] for word in str.split() ]
  return ' '.join(reversed_words)

run_tests( reverse_words )
