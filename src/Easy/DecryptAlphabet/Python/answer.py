import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

FIRST_ASCII = 96

def decryptString ( s):
  msg = ""
  i = 0
  
  while i < len(s):
    if i+2 < len(s) and s[i+2] == '#':
      encrypted = s[i:i+2]
      i += 3
    else:
      encrypted = s[i]
      i += 1
    
    asciiValue = int(encrypted) + FIRST_ASCII
    msg += chr(asciiValue)
  
  return msg

run_tests( decryptString )
