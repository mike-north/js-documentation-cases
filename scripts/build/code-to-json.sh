#!/bin/bash

source ./scripts/run_for_each.sh

code_to_json_for_example() {
  mkdir docs/code-to-json/$1
  if [ -e cases/$1/src/index.ts ]
  then
    ./node_modules/.bin/code-to-json -o docs/code-to-json/$1/out.json cases/$1/src/index.ts
  else
    ./node_modules/.bin/code-to-json -o docs/code-to-json/$1/out.json cases/$1/src/index.js
  fi
}
if [ -e docs/code-to-json ]
then
  rm -rf docs/code-to-json
fi
mkdir docs/code-to-json
run_for_each_example code_to_json_for_example