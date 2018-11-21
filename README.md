# JUS.no
HTML, CSS and JS prototype for JUS

## Overview
This prototype is based on NPM, Gulp, Sass, [Metalsmith](http://www.metalsmith.io/) (a static site generator built on Node), and Bootstrap.

It is being developed and tested on MacOS, but should probably run fine on any system that has a command line where you're able to run npm and gulp.


## Installing
If you already have NPM installed, just open a terminal window, cd to the prototype root directory, and run `npm install`.


## Running
If you have installed Gulp globally (which you should), building the static HTML files (from the Metalsmith templates) and transforming the Sass source files into CSS, is a simple as running just `gulp`. This will run a series of Gulp tasks and produce a complete, static project build that ends up in `dist/`.

However, you might want to run `gulp dev` instead, which runs all the same tasks and transformations as just `gulp`, but fires up a node webserver instance on [localhost:1000](http://localhost:10000/) as well for your convenience. It also runs the `watch` task, rebuilding and hot reloading whenever you do changes to the source files.


## Details
Some short notes on various details of the project.

* The main Gulp file is located in `gulpfile.js/index.js`, and all tasks are located in `gulpfile.js/tasks/`.

* Configuration for the various Gulp tasks are located in `gulpfile.js/config.json`

* http://editorconfig.org/ is configured by `.editorconfig`

* There is a Gulp task to generate a [KSS Styleguide](http://warpspire.com/kss/) (`gulp styleguide`) directly from the Sass source files, but this requires spending a lot of time and effort documenting the various Sass files -- which most likely has not been done, unless the customer specifically has asked (and made room) for a styleguide. If supported, the stylelint is generated in `dist/styleguide/` and can be accessed through the browser on port 10000 as well.

* Run [Stylelint](https://stylelint.io/) by running `gulp stylelint`. The config file is found in `.stylelintrc.json`.

* The HTML templates are currently made using the [Twig template engine](https://github.com/twigjs/twig.js/wiki).

* There is a bug (or rather a missing way of configuring everything down the chain from gulp, through metalsmith, via metalsmith js-transformers, and all the way down to the Twig template engine), which stops us from disabling caching in Twig when running Gulp in watch-mode. So changing something in an HTML template will re-run the proper task, but Twig will be stubborn and use its template cache, causing the changes to not appear until you stop and start Gulp. A workaround? Well, yeah. Sort of. Edit the file `node_modules/jstransformer-twig/index.js`, and add a simple `Twig.cache(false);` somewhere near the top (ie. after the `const twigRender = Twig.twig` line).

* Some global variables used in the Twig templates are set in JSON files found in `var/`, and made available to Twig through Metalsmith.