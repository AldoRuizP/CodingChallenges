import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def is_number_palindrome( num ):
  """ A function that checks if an integer is also a palindrome, without parsing it to string

  Args:
      num ( number ): An integer

  Returns:
      boolean: True or false if the given integer is a palindrome
  """
  digits = number_to_array( num )
  return digits == digits[::-1]

def number_to_array( num ):
  """ Helper function that parses an integer number into an array of numbers

  Args:
      num ( number ): An integer

  Returns:
      number[]: The given integer, parsed into a list of digits
  """
  digits = []
  while num != 0:
    num, digit = divmod( num, 10 )
    digits.append( digit )
  return digits

run_tests( is_number_palindrome )
