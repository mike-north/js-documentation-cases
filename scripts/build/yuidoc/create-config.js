#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function createConfig(name) {
  return `{
  "name": "${name}",
  "description": "${name}",
  "version": "0.0.1",
  "options": {
    "linkNatives": "true",
    "attributesEmit": "true",
    "selleck": "true",
    "outdir": "../../docs/yuidoc/${name}",
    "paths": ["./src"]
  }
}`;
}

const name = process.argv[2];
if (!name) throw new Error('No name passed to yuidoc/create-config!');

const content = createConfig(name);
const configPath = path.join(
  __dirname,
  '..',
  '..',
  '..',
  'cases',
  name,
  'yuidoc.json'
);
fs.writeFileSync(configPath, content);
