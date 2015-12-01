module.exports = function(gulp, plugins)
{
    return function()
    {
        // Images
        gulp.src("src/img/**/*")
            .pipe(gulp.dest("build/img"));

        // Fonts
        gulp.src("src/fonts/**/*")
            .pipe(gulp.dest("build/fonts"));

        // CSS
        gulp.src("node_modules/bootstrap-select/dist/css/**/*")
            .pipe(gulp.dest("build/css"));
        gulp.src("node_modules/select2/dist/css/**/*")
            .pipe(gulp.dest("build/css"));

        // JavaScript
        gulp.src("src/js/**/*")
            .pipe(gulp.dest("build/js"));
        gulp.src("node_modules/jquery/dist/**/*")
            .pipe(gulp.dest("build/js"));
        gulp.src("node_modules/bootstrap-select/dist/js/**/*")
            .pipe(gulp.dest("build/js"));
        gulp.src("node_modules/select2/dist/js/**/*")
            .pipe(gulp.dest("build/js"));

        // Favicon files
        gulp.src("src/favicon/**/*")
            .pipe(gulp.dest("build"));
    };
};
