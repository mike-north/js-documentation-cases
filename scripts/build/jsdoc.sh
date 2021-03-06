#!/bin/bash

source ./scripts/run_for_each.sh

jsdoc_for_example() {
  cd cases/$1
  tsc --outDir ../../jsdoc-out/$1
  ../../node_modules/.bin/jsdoc ../../jsdoc-out/$1 --readme ../../README.md -d ../../docs/jsdoc/$1
  cd ../..
}
rm -rf jsdoc-out
rm -rf docs/jsdoc
run_for_each_example jsdoc_for_example
# rm -rf jsdoc-out