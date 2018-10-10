#!/bin/sh
echo "hello"
source ./scripts/run_for_each.sh

jsdoc_for_example() {
  ./node_modules/.bin/jsdoc cases/$1 -d docs/jsdoc/$1
}
rm -rf docs/jsdoc
run_for_each_example jsdoc_for_example