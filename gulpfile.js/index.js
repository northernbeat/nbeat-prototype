"use strict";

var gulp    = require("gulp");
var config  = require("./config.json");
var plugins = require("gulp-load-plugins")(config.gulp.loadPlugins);

gulp.task("default",    ["project", "html", "sass", "assets"]);
gulp.task("qa",         ["stylelint", "spec-graph"]);
gulp.task("assets",     ["copy-assets", "svg-sprite"]);
gulp.task("styleguide", ["kss-sass", "kss"]);
gulp.task("doc",        ["styleguide"]);
gulp.task("dev",        ["default", "webserver", "watch"]);
    
gulp.task("clean",       require(config.system.taskdir + "/clean")(gulp, plugins, config));
gulp.task("html",        require(config.system.taskdir + "/metalsmith")(gulp, plugins, config));
gulp.task("sass",        require(config.system.taskdir + "/sass")(gulp, plugins, config));
gulp.task("stylelint",   require(config.system.taskdir + "/stylelint")(gulp, plugins, config));
gulp.task("svg-sprite",  require(config.system.taskdir + "/svg-sprite")(gulp, plugins, config));
gulp.task("watch",       require(config.system.taskdir + "/watch")(gulp, plugins, config));
gulp.task("copy-assets", require(config.system.taskdir + "/copy-assets")(gulp, plugins, config));
gulp.task("webserver",   require(config.system.taskdir + "/webserver")(gulp, plugins, config));
gulp.task("spec-graph",  require(config.system.taskdir + "/spec-graph")(gulp, plugins, config));
gulp.task("kss",         require(config.system.taskdir + "/kss")(gulp, plugins, config));
gulp.task("kss-sass",    require(config.system.taskdir + "/kss-sass")(gulp, plugins, config));
gulp.task("project",     require(config.system.taskdir + "/project")(gulp, plugins, config));
