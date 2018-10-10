#!/bin/sh
echo "Applying fix for https://github.com/SimplrJS/ts-docs-gen/pull/47"
perl -pi -e 's/\r\n/\n/g' node_modules/ts-docs-gen/dist/cli/launcher.js