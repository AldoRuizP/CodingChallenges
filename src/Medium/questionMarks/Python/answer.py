import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests


def my_function( str ):
  """  A function that determines if a string of numbers, letters and question marks has exactly three question marks 
  between each pair of numbers that add up to 10

  Arguments:
      str { string } -- The input string to validate

  Returns:
      [ boolean ] -- True or false if all the pairs of numbers that add up to 10, have exactly three question marks in between them
  """

  previous_char = 11
  is_valid = False
  question_marks = 0

  for current_char in str:
    if current_char == '?':
      question_marks += 1
    elif current_char.isdigit():
      sum = int( current_char ) + previous_char
      is_valid = question_marks == 3 if sum == 10 else is_valid
      question_marks = 0
      previous_char = int( current_char )

  return is_valid

run_tests( my_function )
