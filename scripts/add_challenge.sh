#!/bin/bash
source ./scripts/select_option.sh

difficulty_options=( "Easy" "Medium" "Hard" )

function print_question() {
  printf "\n\033[1m$1\033[0m\n"
}

function print_log(){
  printf "\n\033[0;32m$1\033[0m"
}

function print_error(){
  printf "\n\033[0;31m$1\033[0m\n" > /dev/stderr 
}

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

function read_multiline_input() {
  local tmp
  while :
  do
    read line
    [[ $line == "DONE" ]] && tmp="${tmp:0:$((${#tmp}-1))}" && break
    tmp="$tmp"$line$'\n'
  done
  echo "$tmp"
}

function validate_challenge_name() {
  unset folder_name
  while :
  do
    read folder_name
    if [[ ! -d "./src/$difficulty/$folder_name" ]]; then break
    else print_error "There's already a challenge with this name. Please enter a different one\n"; fi
  done
  echo "$folder_name"
}

function init() {
  printf "\nUse this program to add a new challenge\n";

  # Capture difficulty
  print_question "First, select the appropriate difficulty level of the new challenge:";
  select_option "${difficulty_options[@]}"
  choice=$?
  difficulty="${difficulty_options[choice]}"

  # Capture challenge name
  print_question "Enter a name for your challenge, (use PascalCase):"
  challenge_name=$(validate_challenge_name $difficulty)
  print_log "The given name \"$challenge_name\" is available!.\n"
  
  # Capture description
  print_question "Enter the description of the new challenge: (type \"DONE\" to finish input)"
  challenge_description=$(read_multiline_input)

  # Capture starting point
  print_question "\nEnter the starting point of the new challenge, (use markdown syntax and type \"DONE\" to finish input):"
  challenge_starting_point=$(read_multiline_input)

  # Capture constrains
  print_question "\nEnter the constrains for the new challenge (or leave empty if there are non):"
  read -p "" challenge_constrains;

  # Create folders and files
  cd src/$difficulty && mkdir $challenge_name  && cd $challenge_name
  print_log "Created folder structure"
  touch README.md 
  print_log "Created Readme file"
  touch tests
  print_log "Created tests file"
  echo -e "## Description\n\n$challenge_description\n\n## Starting Point\n\n$challenge_starting_point\n\n## Constrains\n\n$challenge_constrains" >> README.md
  print_log "Created folder structure and README file"
  create_js_folder
  create_python_folder
  
}

init
