module.exports = function(gulp, plugins, config)
{
    var kss = require("kss");

    return function()
    {
        return kss(config.kss);
    }
}
