module.exports = function(gulp, plugins)
{
    return function()
    {
        // Forside
        gulp.src(["src/html/layout/header.html",
                  "src/html/index.html",
                  "src/html/layout/footer.html"],
                 {base: "src/"})
            .pipe(plugins.concat("index.html"))
            .pipe(gulp.dest("build"));

        // Artikkel
        gulp.src(["src/html/layout/header.html",
                  "src/html/artikkel.html",
                  "src/html/layout/footer.html"],
                 {base: "src/"})
            .pipe(plugins.concat("artikkel.html"))
            .pipe(gulp.dest("build"));

        // Kurs
        gulp.src(["src/html/layout/header.html",
                  "src/html/kurs.html",
                  "src/html/layout/footer.html"],
                 {base: "src/"})
            .pipe(plugins.concat("kurs.html"))
            .pipe(gulp.dest("build"));
    };
};
