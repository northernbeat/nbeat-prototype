module.exports = function(gulp, plugins, config)
{
    var dest = config.build.dest + config.sass.dest;
    
    return function()
    {
        return gulp
            .src(config.sass.src)
            // .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass(config.sass.opts)
                  .on("error", plugins.sass.logError))
            // .pipe(plugins.sourcemaps.write())
            .pipe(plugins.minifyCss())
            .pipe(plugins.rename(function(path) {
                path.basename += ".min";
            }))
            .pipe(gulp.dest(dest))
    };
};
