#!/bin/sh
source ./scripts/run_for_each.sh

tsdocsgen_for_example() {
  if [ -e cases/$1/index.ts ]
  then
      ./node_modules/.bin/ts-docs-gen -p cases/$1 --entryFile index.ts -o docs/ts-docs-gen/$1
  else
      ./node_modules/.bin/ts-docs-gen -p cases/$1 --entryFile index.js -o docs/ts-docs-gen/$1
  fi
}
rm -rf docs/ts-docs-gen
run_for_each_example tsdocsgen_for_example