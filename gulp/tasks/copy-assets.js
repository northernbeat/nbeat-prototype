module.exports = function(gulp, plugins, config)
{
    return function()
    {
        // Images
        if (config.assets.images.src instanceof Array) {
            config.assets.images.src.forEach(function(imgSrc) {
                return gulp.src(imgSrc)
                    .pipe(gulp.dest(config.main.dest + config.assets.images.dest))
                    .pipe(plugins.debug({title: "Asset, image:"}))
            });
        }

        // Fonts
        if (config.assets.fonts.src instanceof Array) {
            config.assets.fonts.src.forEach(function(fontSrc) {
                return gulp.src(fontSrc)
                    .pipe(gulp.dest(config.main.dest + config.assets.fonts.dest))
                    .pipe(plugins.debug({title: "Asset, font:"}))
            });
        }
        
        // External, preprocessed CSS
        if (config.assets.css.src instanceof Array) {
            config.assets.css.src.forEach(function(cssSrc) {
                return gulp.src(cssSrc)
                    .pipe(gulp.dest(config.main.dest + config.assets.css.dest))
                    .pipe(plugins.debug({title: "Asset, CSS:"}))
            });
        }
        
        // JavaScript
        if (config.assets.js.src instanceof Array) {
            config.assets.js.src.forEach(function(jsSrc) {
                return gulp.src(jsSrc)
                    .pipe(gulp.dest(config.main.dest + config.assets.js.dest))
                    .pipe(plugins.debug({title: "Asset, JS:"}))
            });
        }

        // Favicon
        if (config.assets.favicon.src instanceof Array) {
            config.assets.favicon.src.forEach(function(faviconSrc) {
                return gulp.src(faviconSrc)
                    .pipe(gulp.dest(config.main.dest + config.assets.favicon.dest))
                    .pipe(plugins.debug({title: "Asset, Favicon:"}))
            });
        }


        // // Saved-as assets
        // if (config.assets.savedAs.src instanceof Array) {
        //     config.assets.savedAs.src.forEach(function(saSrc) {
        //         return gulp.src(saSrc)
        //             .pipe(gulp.dest(config.main.dest + config.assets.savedAs.dest))
        //             .pipe(plugins.debug({title: "Asset, SavedAs:"}))
        //     });
        // }

    };
};
