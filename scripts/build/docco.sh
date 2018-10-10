#!/bin/sh

./node_modules/.bin/yarn run_for_each

docco_for_example() {
  cd cases/$1
  ../../node_modules/.bin/docco -o ../../docs/docco/$1 src/*.*s
  cd ../..
}
rm -rf docs/docco
run_for_each_example docco_for_example