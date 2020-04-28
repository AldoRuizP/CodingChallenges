import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def transpose_matrix( matrix ):
  """ 
  A function that transposes a matrix. 
  Transposing a matrix means the rows are now the column and vice-versa.

  Arguments:
      matrix { list[] } -- A list of lists, representing a matrix

  Returns:
      list[] -- A list of lists, representing the transpose of the given matrix
  """
  return [ list(a) for a in zip(*matrix) ]

run_tests( transpose_matrix )


