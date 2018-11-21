module.exports = function(gulp, plugins, config)
{
    var path = config.build.dest + "**/*";
    var log  = require("fancy-log");
    
    return function()
    {
        plugins.del([path]);
        log("Deleted content in " + config.build.dest);
    };
};
