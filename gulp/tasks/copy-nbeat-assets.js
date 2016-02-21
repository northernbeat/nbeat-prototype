module.exports = function(gulp, plugins, config)
{
    return function()
    {
        // var cssSrc   = config.main.base + "/scss/nbeat/internal/nbeat-concept.scss";
        // var cssDest  = config.main.dest + config.sass.dest;

        var nbeatSrc = [
            { "src":  config.main.base + "/js/nbeat-concept.js",
              "dest": config.main.dest + "/js"},
            { "src":  config.main.base + "/img/nbeat-logo.svg",
              "dest": config.main.dest + "/img"},
            { "src":  config.main.base + "/scss/nbeat/internal/nbeat-concept.min.css",
              "dest": config.main.dest + "/css"},
            { "src":  config.main.base + "/fonts/nationale-*",
              "dest": config.main.dest + "/fonts"}
        ];

        // config.sass.opts.includePaths.unshift(config.main.base + "/scss/");

        nbeatSrc.forEach(function(item) {
            gulp.src(item.src)
                .pipe(gulp.dest(item.dest))
                .pipe(plugins.debug({title: "NBeat Asset:"}))
        });

        // gulp.src(cssSrc)
        //     .pipe(plugins.debug({title: "NBeat Sass, input:"}))
        //     .pipe(plugins.sass(config.sass.opts)
        //           .on("error", plugins.sass.logError))
        //     // .pipe(plugins.sourcemaps.write())
        //     .pipe(gulp.dest(cssDest))
        //     .pipe(plugins.debug({title: "NBeat Sass, output:"}))
        //     .pipe(plugins.minifyCss())
        //     .pipe(plugins.rename(function(path) {
        //         path.basename += ".min";
        //     }))
        //     .pipe(gulp.dest(cssDest))
        //     .pipe(plugins.debug({title: "NBeat Sass, output:"}))
    };
};
