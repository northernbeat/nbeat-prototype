<p>
  <a href="http://www.northernbeat.no/">
    <img src="http://www.northernbeat.no/wp-content/themes/NorthernBeat3/img/logo.svg">
  </a>
</p>

[![npm version](https://badge.fury.io/js/%40northernbeat%2Fprototype.svg)](https://badge.fury.io/js/%40northernbeat%2Fprototype)

## What is this package?

This package provides a simplified build system and environment for
building prototypes at Northern Beat. It provides a wrapper for the
Gulp build system and tasks, default config for all build tasks, and
also all common dependencies for external packages used in our
prototypes.


## Usage

Building a prototype on top of `nbeat-prototype` is as simple as follows:

### NPM setup
Add a `package.json` with the following content, adjusted for your own project:
```
{
    "name": "sandbox",
    "version": "1.0.0",
    "description": "Northern Beat Sandbox",
    "repository": {
        "type": "git",
        "url": "github.com/northernbeat/sandbox"
    },
    "author": {
        "name": "Northern Beat",
        "url": "http://www.northernbeat.no/"
    },
    "contributors": [
        {
            "name": "Eirik Refsdal",
            "email": "eirik.refsdal@nbeat.no"
        }
    ],
    "devDependencies": {
        "@northernbeat/prototype": "^1.0.3"
    }
}
```

Run `npm install` to install all dependencies.
