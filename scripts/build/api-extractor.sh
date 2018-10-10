#!/bin/bash

source ./scripts/run_for_each.sh

api_extractor_for_example() {
  cd cases/$1
  if [ -e ./src/index.ts ]
  then
    rm -rf decl
    ../../node_modules/.bin/tsc --allowJs false --checkJs false --declaration --outDir decl
    yarn build:api-extractor:create-config $1
    ../../node_modules/.bin/api-extractor run -c api-extractor.json
    rm api-extractor.json
  else
    echo "SKIPPING API EXTRACTOR - no src/index.ts found"
  fi
  cd ../..
}
rm -rf docs/api-extractor
run_for_each_example api_extractor_for_example