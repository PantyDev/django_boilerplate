import gulp from "gulp"
import cleanCSS from "gulp-clean-css";
import gulpSass from 'gulp-sass';
import dartSass from 'sass';

const sass = gulpSass(dartSass);

import paths from "../paths";

const complieCss = () => gulp.src(paths.css.in)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(paths.css.out));

export default complieCss;