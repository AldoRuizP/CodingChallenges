#!/bin/bash
source ./scripts/select_option.sh
source ./scripts/create_fileS_and_folders.sh
source ./scripts/format_messages.sh
source ./scripts/handle_input.sh
difficulty_options=( "Easy" "Medium" "Hard" )

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
create_files_and_folders $difficulty $challenge_name $challenge_description $challenge_starting_point $challenge_constrains  
