import gulp from "gulp"

import paths from "../paths";

const complieHtml = () => gulp.src(paths.html.inAll)
    .pipe(gulp.dest(paths.html.outAll));

export default complieHtml;