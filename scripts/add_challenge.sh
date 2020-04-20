#!/bin/bash


function init() {

  printf "
    Use this program to add a new challenge

    First, select the appropriate difficulty level of the new challenge:

  "

  options=( "Easy" "Medium" "Hard" )
  select_option "${options[@]}"
  choice=$?
  local difficulty="${options[choice]}"
  echo "$difficulty"
}



source ./scripts/select_option.sh
init

