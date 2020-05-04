import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def find_intersection( str_array ):
  array_1 = map(int, str_array[0].split(', '))
  array_2 = map(int, str_array[1].split(', '))
  matches =  repr ( set(array_1) & set(array_2) )
  return matches.replace(' ', '').replace('{','').replace('}','') if matches else False

run_tests( find_intersection )
