import gulp from "gulp"
import ts from "gulp-typescript";
import concat from "gulp-concat";
import minify from "gulp-minify";


import paths from "../paths";

const complieJs = () => gulp.src(paths.js.in)
    .pipe(ts())
    .pipe(concat('scripts.js'))
    .pipe(minify())
    .pipe(gulp.dest(paths.js.out));

export default complieJs;