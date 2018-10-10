#!/bin/sh

./node_modules/.bin/yarn run_for_each

tsdocsgen_for_example() {
  if [ -e cases/$1/src/index.ts ]
  then
      ./node_modules/.bin/ts-docs-gen -p cases/$1 --entryFile src/index.ts -o docs/ts-docs-gen/$1
  else
      ./node_modules/.bin/ts-docs-gen -p cases/$1 --entryFile src/index.js -o docs/ts-docs-gen/$1
  fi
}
rm -rf docs/ts-docs-gen
run_for_each_example tsdocsgen_for_example