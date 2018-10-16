#!/bin/bash

source ./scripts/run_for_each.sh

typedoc_for_example() {
  ./node_modules/.bin/typedoc --allowJs --checkJs --noEmit --allowJs --ignoreCompilerErrors --name $1 --mode modules --module amd --target ES6 --out docs/typedoc/$1 cases/$1/src
}
rm -rf docs/typedoc
run_for_each_example typedoc_for_example