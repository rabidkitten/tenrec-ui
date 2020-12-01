# Documentation

## Standards

We use the `markdownlint` VS Code extension (davidanson.vscode-markdownlint)
with default settings to enforce standards in our markdown files. Rule MD033 is
disabled in `.markdownlint.json` since GitHub (as of this writing) does not
allow resizing of images using markdown syntax and a standard HTML image tag is
necessary. Any standards that are not enforced by this tool, will be documented
here.

### File Names

All markdown files have an uppercase name with a lowercase `md` extension. For
example, `CONTRIBUTING.md`

File names with multiple words use hyphens to separate each word. For example,
`CODE-OF-CONDUCT.md`

### File Locations

Markdown files commonly included in a GitHub repository are stored in the root,
whereas non-standard files are stored in the `docs` folder.
