module.exports = function(gulp, plugins, config)
{
    return function()
    {
        plugins.connect.server(config.webserver.opts);
    };
};
