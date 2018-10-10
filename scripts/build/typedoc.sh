#!/bin/sh

./node_modules/.bin/yarn run_for_each

typedoc_for_example() {
  ./node_modules/.bin/typedoc --checkJs --noEmit --allowJs --ignoreCompilerErrors --name $1 --mode modules --module amd --target ES6 --out docs/typedoc/$1 cases/$1
}
rm -rf docs/typedoc
run_for_each_example typedoc_for_example