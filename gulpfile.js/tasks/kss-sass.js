module.exports = function(gulp, plugins, config)
{
    var src  = config.kss.builder + "/scss/*.scss";
    var dest = config.build.dest + config.sass.dest;
    
    return function()
    {
        return gulp
            .src(src)
            .pipe(plugins.sass(config.sass.opts)
                  .on("error", plugins.sass.logError))
            .pipe(gulp.dest(dest))
            .pipe(plugins.cssnano())
            .pipe(plugins.rename(function(path) {
                path.basename += ".min";
            }))
            .pipe(gulp.dest(dest))
            .pipe(plugins.connect.reload())
    };
};
