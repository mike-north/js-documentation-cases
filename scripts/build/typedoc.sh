#!/bin/sh
echo "hello"
source ./scripts/run_for_each.sh

typedoc_for_example() {
  ./node_modules/.bin/typedoc --name $1 --mode modules --module commonjs --target ES6 --excludePrivate --excludeNotExported --out docs/typedoc/$1 cases/$1
}
rm -rf docs/typedoc
run_for_each_example typedoc_for_example