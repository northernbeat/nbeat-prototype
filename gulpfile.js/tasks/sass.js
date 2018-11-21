module.exports = function(gulp, plugins, config)
{
    var dest = config.build.dest + config.sass.dest;
    
    return function()
    {
        return gulp
            .src(config.sass.src)
            .pipe(plugins.sassGlob())
            .pipe(plugins.sourcemaps.init())
            // .pipe(plugins.debug({title: "Sass, input:"}))
            .pipe(plugins.sass(config.sass.opts)
                  .on("error", plugins.sass.logError))
            .pipe(gulp.dest(dest))
            // .pipe(plugins.debug({title: "Sass, output:"}))
            // .pipe(plugins.shorthand())
            .pipe(plugins.cssnano())
            .pipe(plugins.sourcemaps.write("./maps"))
            .pipe(plugins.rename(function(path) {
                path.basename += ".min";
            }))
            .pipe(gulp.dest(dest))
            // .pipe(plugins.debug({title: "Sass, output:"}))
            .pipe(plugins.connect.reload())
    };
};
