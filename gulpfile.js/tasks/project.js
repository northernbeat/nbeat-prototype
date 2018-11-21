module.exports = function(gulp, plugins, config)
{
    var src  = config.system.project.src + "/*.html";
    var tpl  = config.system.project.src;
    var dest = config.build.dest;
    var log  = require("fancy-log");

    return function()
    {
        return gulp.src(src)
            .pipe(plugins.metalsmith({
                use: [
                    plugins.metalsmithPackagejson(),
                    plugins.metalsmithMetadata(config.system.metadata),
                    plugins.metalsmithLayouts({
                        directory: tpl
                    }),
                    plugins.metalsmithJstransformer(config.metalsmith.jstransformer)
                ]
            }))
            .pipe(gulp.dest(dest))
            .pipe(plugins.connect.reload())
    }
};
