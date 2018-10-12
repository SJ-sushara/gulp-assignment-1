"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp
    .src("./sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./sass/*.scss", ["sass"]);
});

var uglifycss = require("gulp-uglifycss");

gulp.task("css", function() {
  gulp
    .src("./css/*.css")
    .pipe(
      uglifycss({
        maxLineLen: 80,
        uglyComments: true
      })
    )
    .pipe(gulp.dest("./dist/"));
});

var uglify = require("gulp-uglify");
var pump = require("pump");

gulp.task("compress", function(cb) {
  pump([gulp.src("./js/*.js"), uglify(), gulp.dest("dist")], cb);
});

// fonts
gulp.task("fonts", () => gulp.src("./fonts/**/*.*").pipe(gulp.dest("/fonts/")));

gulp.task("run", [("sass", "css", "compress", "fonts")]);

gulp.task("watch", function() {
  gulp.watch("./sass/*.scss", ["sass"]);
  gulp.watch("./css/*.css", ["css"]);
  gulp.watch("./js/*.js", ["compress"]);
  gulp.watch("./fonts/**/*.*", ["fonts"]);
});

gulp.task("default", ["run", "watch"]);
