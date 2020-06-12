import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def product_of_array( arr ):
  """ A function that calculates the product of all the elements in the array except itself and returns it an a new array

  Args:
      arr ( number[] ): A list of integers

  Returns:
      number[]: A list of integers
  """
  N = len(arr)
  res   = [1] * N
  left  = [1] * N
  right = [1] * N

  product_left = 1
  product_right = 1

  for i in range( 0, N ):
    j = N - 1 - i
    left[i] = product_left 
    right[j] = product_right
    product_left *= arr[i]
    product_right *= arr[j]

  for i in range( 0, N ):
    res[i] = left[i] * right[i]

  return res
  

run_tests( product_of_array )
