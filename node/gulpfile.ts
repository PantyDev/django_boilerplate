import gulp from "gulp"
import paths from "./paths";
import browserSync from 'browser-sync';
import complieJs from "./tasks/compileJs";
import complieCss from "./tasks/compileCss";
import runServer from "./tasks/runDjango";
import complieHtml from "./tasks/compileHtml";

gulp.task("typescript", complieJs);
gulp.task("scss", complieCss);
gulp.task("html", complieHtml);
gulp.task('default', gulp.parallel(['typescript', 'scss', "html"]));
gulp.task('runserver', runServer);

function reload(done: any) {
    browserSync.reload();
    done();
}

gulp.task('reload', (cb) => reload(cb));
gulp.task('watch', () => {
    gulp.watch(paths.js.inAll, gulp.series('typescript', 'reload'));
    gulp.watch(paths.css.inAll, gulp.series('scss', 'reload'));
    gulp.watch(paths.html.inAll, gulp.series('html', 'reload'));
});

gulp.task("sync", function() {
    browserSync.init({
        notify: false,
        port: 8000,
        proxy: 'localhost:8000',
        localOnly: true,
        reloadDelay: 300,
        reloadDebounce: 500
    });
});

gulp.task('dev', gulp.parallel('runserver', "sync", "default", "watch"));