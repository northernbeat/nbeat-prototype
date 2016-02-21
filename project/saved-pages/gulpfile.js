"use strict";

var gulp    = require("gulp");
var config  = require("./config.json");
var plugins = require("gulp-load-plugins")(config.gulp.loadPlugins);
    
gulp.task("default", ["html", "css", "assets", "nbeat"]);
    
gulp.task("clean",  require(config.main.base + "/gulp/tasks/clean")(gulp, plugins, config));
gulp.task("html",   require(config.main.base + "/gulp/tasks/metalsmith")(gulp, plugins, config));
gulp.task("css",    require(config.main.base + "/gulp/tasks/sass")(gulp, plugins, config));
gulp.task("watch",  require(config.main.base + "/gulp/tasks/watch")(gulp, plugins, config));
gulp.task("assets", require(config.main.base + "/gulp/tasks/copy-assets")(gulp, plugins, config));
gulp.task("nbeat",  require(config.main.base + "/gulp/tasks/copy-nbeat-assets")(gulp, plugins, config));
