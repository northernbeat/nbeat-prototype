module.exports = function(gulp, plugins, config)
{
    return function()
    {
        gulp.watch("src/html/**",             ["html"]);
        gulp.watch("src/scss/**/*.scss",      ["sass"]);

        gulp.watch("src/favicon/**",          ["assets"]);
        gulp.watch("src/fonts/**",            ["assets"]);
        gulp.watch("src/img/**",              ["assets"]);
        gulp.watch("src/js/**",               ["assets"]);
        gulp.watch("src/svg/**",              ["svg-sprite"]);
        gulp.watch("src/project/**",          ["project"]);

        gulp.watch("package.json",            ["default"]);
        gulp.watch("var/**",                  ["html", "default"]);
        gulp.watch("gulpfile.js/config.json", ["default"]);

        gulp.watch("src/kss/**",              ["styleguide"]);
    };
};
