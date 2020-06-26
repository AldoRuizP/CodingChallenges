import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def maximum_balanced_strings( s ):

  count = 0
  maximum_strings = 0

  for char in s:
    count +=1 if char == 'L' else -1
    if count == 0:
      maximum_strings += 1

  return maximum_strings

run_tests( maximum_balanced_strings )
