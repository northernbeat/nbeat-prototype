"use strict";

const merge         = require("deepmerge");
const NbeatRegistry = require("@northernbeat/gulp-tasks");

class NbeatPrototype
{
    constructor()
    {
        this.state  = {};
        this.config = require("./config.json");
    }


    init(gulp, config = {})
    {
        this.gulp   = gulp;
        this.config = merge(this.config, config);
        
        this.importNbeatGulpTasks();

        return this.gulp;
    }



    importNbeatGulpTasks()
    {
        const reg = new NbeatRegistry(this.config);

        this.gulp.registry(reg);

        // Add aliases
        this.gulp.task("html",    this.gulp.series("twig"));
        this.gulp.task("css",     this.gulp.series("sass"));
        this.gulp.task("qa",      this.gulp.series("stylelint"));
        this.gulp.task("doc",     this.gulp.series("sassdoc"));
        this.gulp.task("default", this.gulp.series("clean", "html", "css", "assets", "doc", "webserver", "watch"));
    }
    
}

module.exports = new NbeatPrototype();
