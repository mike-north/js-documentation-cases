#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function createConfig(name) {
  return `{
  "$schema": "https://dev.office.com/json-schemas/api-extractor/api-extractor.schema.json",
  "compiler" : {
    "configType": "tsconfig",
    "rootFolder": "."
  },
  "project": {
    "entryPointSourceFile": "decl/index.d.ts"
  }
}`;
}

const name = process.argv[2];
if (!name) throw new Error('No name passed to api-extractor/create-config!');

const content = createConfig(name);
const configPath = path.join(
  __dirname,
  '..',
  '..',
  '..',
  'cases',
  name,
  'api-extractor.json'
);
fs.writeFileSync(configPath, content);
