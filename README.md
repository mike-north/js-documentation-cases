# JS/TS Library Documentation Test Cases

[![Build Status](https://travis-ci.org/mike-north/js-documentation-cases.svg?branch=master)](https://travis-ci.org/mike-north/js-documentation-cases)

A set of test cases for evaluating the capabilities and support of documentation generation tools.

## The Cases

The subfolders of `./cases` represent meaningful scenarios that are important for library doc generation. In theory, these are ordered in increasing level of difficulty for doc tooling to handle.

### `1. Single-File JavaScript`

A single JavaScript file, with some module-private (non-exported) values, and some exported ones

### `2. Single-File TypeScript`

A single TypeScript file, with some module-private (non-exported) values, and some exported ones

### `3. Multi-File JavaScript`

A single "entry" file, that consumes from multiple other JS files (which are not available directly to consumers for consumption).

### `4. Multi-File TypeScript`

A single "entry" file, that consumes from multiple other TS files (which are not available directly to consumers for consumption).

### `5. TypeScript Exported Types`

TypeScript code that exports Interfaces and Type Aliases in addition to values

### `6. TypeScript Advanced Types`

A couple of tricky TypeScript scenarios, including the merge of a `class` and `namespace`.

### `7. JavaScript consumes TypeScript`

A scenario involving a mix of JS and TS files, where the types provided by TS are consumed and used in JSDoc comments

### `8. No TSConfig`

A scenario where no local `tsconfig.json` is found, and a default one must be used for doc generation instead

---

(c) 2018 LinkedIn
