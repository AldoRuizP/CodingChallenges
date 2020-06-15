
import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def editing_distance(strings):
  """ A function that calculates the minimum editing distance of two given strings

  Args:
      strings ( string[] ): An array with two strings to calculate its editing distance

  Returns:
      number: The editing distance of the two given arrays
  """

  s1 = strings[0]
  s2 = strings[1]
  s1_length = len(s1) + 1
  s2_length = len(s2) + 1
  matrix = [ [0] * s2_length for x in range( s1_length ) ]

  for i in range(s1_length): 
    for j in range(s2_length): 
      if i == 0: 
        matrix[i][j] = j
      elif j == 0: 
        matrix[i][j] = i
      elif s1[i-1] == s2[j-1]: 
        matrix[i][j] = matrix[i-1][j-1] 
      else:
        matrix[i][j] = 1 + min( matrix[i][j-1], matrix[i-1][j], matrix[i-1][j-1] )
  
  return matrix[ s1_length -1 ][ s2_length -1 ]



run_tests(editing_distance)
