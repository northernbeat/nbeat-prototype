module.exports = function(gulp, plugins)
{
    var src  = "src/html/**";
    var dest = "build";

    return function()
    {
        return gulp
            .src(src)
            .pipe(plugins.metalsmith())
            .pipe(plugins.validator())
            .pipe(gulp.dest(dest))
    };
};
