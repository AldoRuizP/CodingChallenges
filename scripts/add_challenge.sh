#!/bin/bash
source ./scripts/select_option.sh

difficulty_options=( "Easy" "Medium" "Hard" )

function print_question() {
  printf "\n\033[1m$1\033[0m\n"
}

function init() {
  printf "\nUse this program to add a new challenge\n";

  print_question "First, select the appropriate difficulty level of the new challenge:";

  select_option "${difficulty_options[@]}"
  choice=$?
  local difficulty="${difficulty_options[choice]}"

  print_question "Enter a name for your challenge, (use PascalCase):"
  read -p "" challenge_name;
  
  print_question "Enter the description of the new challenge: (type ^ to finish input)"
  read -p  "" '-d^[' challenge_description;

  print_question "\n\nEnter the starting point of the new challenge, (use markdown syntax and type ^ to finish input):"
  read -p "" '-d^[' challenge_starting_point;

  print_question "\nEnter the constrains for the new challenge (or leave empty if there are non):"
  read -p "" challenge_constrains;

  cd src/$difficulty && mkdir $challenge_name && cd $challenge_name && touch README.md
  echo -e "## Description\n\n$challenge_description\n\n## Starting Point\n\n$challenge_starting_point\n\n## Constrains\n\n$challenge_constrains" >> README.md
}



init
