# Contributing

Thank-you for your interest in contributing to Tenrec UI.

## Branching

Please refer to here for [Branching](BRANCHING.md) guidelines.

## Tests

All code must be tested. This includes new features and bug fixes. We use JEST
for all testing and strive to achieve 100% code coverage.

To run all tests and check for code coverage type:

``` bash
npm test
```

To run tests in a specific file type (example provided):

``` bash
npm test -- ./src/text-helper.test.js
```

## JavaScript Standards

We follow the AirBnB standard for all JavaScript programming. ESLint is
installed in the package and is configured to enforce these standards. Please
ensure that any tools you are using to automatically format your code are
configured to use the AirBnB standard.

## Spell Checking

We use the  Code Spell Checker VS Code extension
(streetsidesoftware.code-spell-checker) to check files for spelling mistakes. We
use US English when spelling all words (for example, color vs. colour). Please
ensure that words that are properly spelled but unrecognized are added to
cspell.json in the root folder.
