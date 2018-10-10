run_for_each_example() {
  run_for_example "1-single-file-js" "$@"
  run_for_example "2-single-file-ts" "$@"
  run_for_example "3-multi-file-js" "$@"
  run_for_example "4-multi-file-ts" "$@"
  run_for_example "5-ts-exported-types" "$@"
  run_for_example "6-ts-advanced-types" "$@"
  run_for_example "7-js-consumes-ts" "$@"
  # run_for_example "8-no-tsconfig" "$@"
}
run_for_example() {
  proj=$1
  fn=$2
  echo "Running example: $proj"
  $fn $proj
}

