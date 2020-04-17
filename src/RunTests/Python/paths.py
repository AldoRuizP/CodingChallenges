import sys
import os

"""
Get the path of the file test based on the location of the invoking function
:return: string. The path of the test file
"""
def get_test_file_path():
  namespace = sys._getframe(1).f_globals
  abs_path = namespace['__file__']
  test_file_path = abs_path.rsplit('Python', 2)[0] + 'tests'
  return test_file_path
