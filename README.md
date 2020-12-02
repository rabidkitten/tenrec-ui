# Tenrec UI

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Build Status](https://travis-ci.org/rabidkitten/tenrec-ui.svg?branch=main)](https://travis-ci.org/rabidkitten/tenrec-ui)
[![Coverage Status](https://coveralls.io/repos/github/rabidkitten/tenrec-ui/badge.svg)](https://coveralls.io/github/rabidkitten/tenrec-ui)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE-OF-CONDUCT.md)

Tenrec UI is a set of React UI components.

## About the Name

Tenrec UI is named after the "Tenrec" - a kitten-sized, stout-bodied, nocturnal
mammal endemic to Madagascar.

![Tenrec](./docs/tenrec.jpg)

## Why Tenrec UI

While we were aiming to use as many Material Design components as possible in
our applications and web sites, there were many components that just fell short
of the rich user experience that were being implemented by other companies and
web sites. At that point Tenrec UI was born. If similar components are adopted
by Material Design, we will work towards deprecating them (not removing them)
from our library.

## Installation

The best way to consume Tenrec UI is via the npm package which you can install
with [npm](https://www.npmjs.com/package/tenrec-ui) or yarn if you prefer.

```sh
// with npm
npm install tenrec-ui
```

## Usage

These are the components available in the latest version of the library:

| Component  | Example  |
|---|---|
| [Block Quote](docs/BLOCK-QUOTE.md)  | ![Block Quote](docs/block-quote.png)  |
| [Box Tail](docs/BOX-TAIL.md)  | ![Box Tail Left](docs/box-tail-left.png)  |
| [Bullseye](docs/BULLSEYE.md)  | ![Bullseye Solid](docs/bullseye-solid.png) |
| [Divider](docs/DIVIDER.md)  | ![Divider Solid](docs/divider-solid-text.png) |
| [Copyright Year](docs/COPYRIGHT-YEAR.md)  | ![Copyright Year](docs/copyright-year-base-year.png) |
| [Emphasized Heading](docs/EMPHASIZED-HEADING.md)  | ![Emphasized Heading](docs/emphasized-heading.png) |
| [Embossed Heading](docs/EMBOSSED-HEADING.md) | <img alt="Embossed Heading" src="docs/embossed-heading.png" width="100" /> |
| [Estimated Read Time](docs/ESTIMATED-READ-TIME.md)  | ![Estimated Read Time](docs/estimated-read-time-template.png) |
| [Tag Cloud](docs/TAG-CLOUD.md)  | ![Tag Cloud Tag](docs/tag-cloud.png) |
| [Tag Cloud Tag](docs/TAG-CLOUD-TAG.md)  | ![Tag Cloud Tag](docs/tag-cloud-tag.png) |
| [Time Line](docs/TIME-LINE.md)  | ![Time Line](docs/time-line.png) |
| [Time Line Card](docs/TIME-LINE-CARD.md)  | ![Time Line Card](docs/time-line-card.png) |
| [Zoom Image](docs/ZOOM-IMAGE.md)  | N/A |

### Importing Components

You should import individual components like `tenrec-ui/bullseye` rather than
the entire library.

``` JS
import { Bullseye } from 'tenrec-ui';
```

### Demo

You can view a demo [here](https://codesandbox.io/s/tenrec-ui-m3kor).

## Roadmap

See the [open issues](https://github.com/rabidkitten/tenrec-ui/issues) for a
list of proposed features (and known issues).

## Contributing

Contributing guidelines are available [here](CONTRIBUTING.md)

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the terms of the [GPLv3 license](https://choosealicense.com/licenses/gpl-3.0/).
