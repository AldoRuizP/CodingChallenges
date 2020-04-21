function create_js_folder() {
  mkdir JavaScript && cd JavaScript && touch answer.js
  echo -e "const runTests = require('../../../RunTests/JavaScript/index')\n\nfunction myFunction(){\n  /* Fill this... */\n}\n\nrunTests( myFunction )" >> answer.js
  cd ../
  print_log "Created Javascript folder and src file"
}

function create_python_folder(){
  mkdir Python && cd Python && touch answer.py
  echo -e "import sys\nsys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')\nfrom run_test import run_tests\n\ndef my_function():\n  # Fill this..\n  return\n\nrun_tests( my_function )" >>  answer.py
  cd ../
  print_log "Created Python folder and src file"
}

function create_files_and_folders() {
  difficulty=$1
  name=$2
  description=$3
  starting_point=$4
  constrains=$5

  # Create folders and files
  cd src/$difficulty && mkdir $challenge_name && cd $challenge_name
  print_log "Created folder structure"
  touch README.md
  print_log "Created Readme file"
  touch tests
  print_log "Created tests file"
  echo -e "## Description\n\n$challenge_description\n\n## Starting Point\n\n$challenge_starting_point\n\n## Constrains\n\n$challenge_constrains" >>README.md
  print_log "Created folder structure and README file"
  create_js_folder
  create_python_folder
}
