var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

var input = {
  scss: './scss/*.scss'
}

gulp.task('default', ['sass', 'watch', 'connect']);

/*
Watch input files
*/
gulp.task('watch', function(){
  gulp.watch(input.scss, ['sass']);
});

/*
Run sass to generate css
*/
gulp.task('sass', function(){
  return gulp.src(input.scss)
  .pipe(sass())
  .pipe(gulp.dest('./css/'));
});

/*
Start dev server
*/
gulp.task('connect', function(){
  connect.server({
    port: '4040'
  });
})
