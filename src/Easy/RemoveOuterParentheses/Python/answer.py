import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def removeOuterParenthesis( S ):
  """ A function that given a valid parenthesis string, 
  removes the outermost parentheses of every primitive string in the primitive decomposition of S.

  Args:
      S (string ): a valid parentheses string 

  Returns:
      string: the string S the outermost parentheses of every primitive string
  """

  result_string = ""
  current_primitive_string = ""
  current_primitive_stack = []

  for char in S:

    last_char = current_primitive_stack[-1] if current_primitive_stack else char
    current_primitive_stack.append(char) if last_char == char else  current_primitive_stack.pop()

    if current_primitive_stack:
      current_primitive_string += char
    else:
      result_string += current_primitive_string[1:]
      current_primitive_string = ""
  
  return result_string
    
run_tests( removeOuterParenthesis )
