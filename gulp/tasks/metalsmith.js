module.exports = function(gulp, plugins, config)
{
    var src      = config.metalsmith.src;
    var dest     = config.main.dest;
    
    return function()
    {
        return gulp.src(src)
            .pipe(plugins.debug({title: "HTML, input:"}))
            .pipe(plugins.metalsmith({
                use: [
                    plugins.metalsmithLayouts({
                        engine:    config.metalsmith.engine,
                        directory: config.metalsmith.templates
                    }),
                    plugins.metalsmithInPlace({
                        engine:    config.metalsmith.engine,
                        directory: config.metalsmith.templates
                    })
                ]
            }))
            .pipe(gulp.dest(dest))
            .pipe(plugins.debug({title: "HTML, output:"}))
    }
};
