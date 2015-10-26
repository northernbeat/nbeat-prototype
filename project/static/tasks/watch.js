module.exports = function(gulp, plugins, config)
{
    return function()
    {
        gulp.watch("src/scss/**/*.scss", ["sass"]);
        gulp.watch("src/html/**",        ["metalsmith"]);
    };
};
