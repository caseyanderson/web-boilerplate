const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

var paths = {
  styles: {
    src: "./scss/**/*.scss",
    dest: "./css"
  },
  html: {
    src:"./*.html"
  }
};


// compile scss into css
function style(){
  // find scss file
  return gulp.src(paths.styles.src)
  // pass that file through sass compiler
  .pipe(sass().on('error', sass.logError))
  // where do i save compiled css
  .pipe(gulp.dest(paths.styles.dest))
  // stream changes to all browsers
  .pipe(browserSync.stream());
}


// watch for changes in scss or html
function watch(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.html.src).on('change', browserSync.reload);
}


exports.style = style;
exports.watch = watch;
