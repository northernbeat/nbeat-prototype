module.exports = function(gulp, plugins, config)
{
    var dest = config.build.dest + config.svgSprite.dest;
    
    return function()
    {
        return gulp
            .src(config.svgSprite.src)
            .pipe(plugins.plumber())
            .pipe(plugins.svgSprite({
                shape: {
                    dimension: {
                        maxWidth: 200,
                        maxHeight: 200
                    },
                    spacing: {
                        padding: 0
                    }
                },
                mode: {
                    symbol: true
                },
                variables: {
                    mapname: "icons"
                }
            }).on('error', function (error) {
                console.log(error);
            }))
            .pipe(gulp.dest(dest));
    };
};
