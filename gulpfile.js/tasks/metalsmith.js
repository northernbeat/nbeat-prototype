module.exports = function(gulp, plugins, config)
{
    var src      = config.metalsmith.src;
    var dest     = config.build.dest;
    
    return function()
    {
        return gulp.src(src)
            .pipe(plugins.metalsmith({
                use: [
                    plugins.metalsmithPackagejson(),
                    plugins.metalsmithMetadata(config.system.metadata),
                    plugins.metalsmithLayouts({
                        directory: config.metalsmith.templates
                    }),
                    plugins.metalsmithJstransformer(config.metalsmith.jstransformer)
                ]
            }))
            .pipe(gulp.dest(dest))
            .pipe(plugins.connect.reload())
    }
};
