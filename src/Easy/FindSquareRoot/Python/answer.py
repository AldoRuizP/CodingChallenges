import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def my_function( x ):

  # Initial approximation
  square_root = x / 2


  while ( square_root * square_root != x ):


    print (square_root)

    current_square_difference = ( square_root * square_root ) - x

    # Apply formula  x1 = (x0 + S / x0) / 2
    new_approximation = ( square_root + x / square_root ) / square_root

    new_square_difference = ( new_approximation * new_approximation ) - x

    square_root = new_approximation














run_tests( my_function )
