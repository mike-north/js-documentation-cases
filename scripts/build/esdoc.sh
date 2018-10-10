#!/bin/sh

source scripts/run_for_each.sh

esdoc_for_example() {
  cd cases/$1
  ../../node_modules/.bin/esdoc
  cd ../..
}
rm -rf docs/esdoc
run_for_each_example esdoc_for_example