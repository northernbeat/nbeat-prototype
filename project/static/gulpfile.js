"use strict";

var gulp    = require("gulp");
var plugins = require("gulp-load-plugins")({pattern: ["gulp-*", "gulp.", "del", "metalsmith-*"]});
var config  = require("./config.json");

gulp.task("default", ["clean", "html", "css"]);

gulp.task("clean", require("./tasks/clean")(gulp, plugins, config));
gulp.task("html",  require("./tasks/metalsmith")(gulp, plugins, config));
gulp.task("css",   require("./tasks/sass")(gulp, plugins, config));
gulp.task("watch", require("./tasks/watch")(gulp, plugins, config));

// gulp.task("clean", function(cb) {
//     require("./tasks/clean")(gulp, plugins, config);
// });
// gulp.task("copy-assets", require("./tasks/copy-assets")(gulp, plugins));
// gulp.task("metalsmith", require("./tasks/metalsmith")(gulp, plugins, config));
// gulp.task("metalsmith", require("./tasks/metalsmith")(gulp, plugins));
