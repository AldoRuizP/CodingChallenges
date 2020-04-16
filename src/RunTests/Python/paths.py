import sys
import os
import pprint

def get_test_file_path():
  namespace = sys._getframe(1).f_globals  # caller's globals
  abs_path = namespace['__file__']
  test_file_path = abs_path.rsplit('Python', 2)[0] + 'tests'
  return test_file_path