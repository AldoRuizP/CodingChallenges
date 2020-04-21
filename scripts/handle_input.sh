function read_multiline_input() {
  local tmp=""
  while :
  do
    read line
    if [[ $line == "DONE" ]]
    then 
      if [[ -z "$tmp" ]]
      then
        tmp="None."
      else
        tmp="${tmp:0:$((${#tmp}-1))}"
      fi
      break;
    fi

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