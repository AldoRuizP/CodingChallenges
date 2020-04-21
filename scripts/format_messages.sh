function print_question() {
  printf "\n\033[1m$1\033[0m\n"
}

function print_log(){
  printf "\n\033[0;32m$1\033[0m"
}

function print_error(){
  printf "\n\033[0;31m$1\033[0m\n" > /dev/stderr 
}