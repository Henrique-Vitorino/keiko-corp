var gulp = require("gulp");

var webp = require("gulp-webp");

function gulpImage() {
  return gulp
    .src(["img/*.png", "img/*.jpg"])
    .pipe(webp())
    .pipe(gulp.dest("dist/img"));
}

gulp.task("default", gulp.parallel(gulpImage));
