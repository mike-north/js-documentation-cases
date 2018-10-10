#!/bin/sh

./node_modules/.bin/yarn run_for_each

yuidoc_for_example() {
  cd cases/$1
  yarn build:yuidoc:create-config $1
  ../../node_modules/.bin/yuidoc --extension .js,.ts
  rm yuidoc.json
  cd ../..
}
rm -rf docs/yuidoc
mkdir docs/yuidoc
run_for_each_example yuidoc_for_example