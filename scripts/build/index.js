#!/usr/bin/env node
const hbs = require('handlebars');
const path = require('path');
const fs = require('fs');
const DOCS_PATH = path.join(__dirname, '..', '..', 'docs');
const CASES_PATH = path.join(__dirname, '..', '..', 'cases');
const isDirectory = source => fs.lstatSync(source).isDirectory();

const GENERATORS = ['typedoc', 'esdoc'];
const getDirectories = source =>
  fs
    .readdirSync(source)
    .map(name => path.join(source, name))
    .filter(isDirectory);
const CASES = getDirectories(CASES_PATH).map(c =>
  c.substr(c.lastIndexOf('/') + 1)
);
const TEMPLATE_PATH = path.join(DOCS_PATH, 'index.hbs');
const TEMPLATE = fs.readFileSync(TEMPLATE_PATH).toString();
const out = hbs.compile(TEMPLATE)({
  examples: CASES.map(c => ({
    name: c
  })),
  docGenerators: GENERATORS
});
fs.writeFileSync(path.join(DOCS_PATH, 'index.html'), out);
