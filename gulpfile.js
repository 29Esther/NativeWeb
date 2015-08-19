var gulp = require('gulp');
var gulpif = require('gulp-if');
var sprite = require('css-sprite').stream;

// generate sprite.png and _sprite.less
gulp.task('sprites', function () {
  return gulp.src('./car/*.jpg')
    .pipe(sprite({
      name: 'sprite',
      style: '_sprite.less',
      cssPath: './img',
      processor: 'less'
    }))
    .pipe(gulpif('*.jpg', gulp.dest('./dist/img/'), gulp.dest('./dist/less/')))
});
// generate less with base64 encoded images
gulp.task('base64', function () {
  return gulp.src('./car/*.png')
    .pipe(sprite({
      base64: true,
      style: '_base64.less',
      processor: 'less'
    }))
    .pipe(gulp.dest('./dist/less/'));
});

gulp.task('default', ['sprites', 'base64']);