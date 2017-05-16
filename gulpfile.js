var gulp = require('gulp');
var sass = require('gulp-sass');

var input = {
  scss: './scss/*.scss'
}

gulp.task('default', ['sass', 'watch']);

gulp.task('watch', function(){
  gulp.watch(input.scss, ['sass']);
});

gulp.task('sass', function(){
  return gulp.src(input.scss)
  .pipe(sass())
  .pipe(gulp.dest('./css/'));
});
