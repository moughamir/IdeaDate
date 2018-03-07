const gulp       = require('gulp');
const sass       = require('gulp-sass');
const ap         = require('gulp-autoprefixer');
const clean      = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
const imageMin   = require('gulp-imagemin');
//const bsync = require('browserSync');

const settings = {
  sourceStyle     : 'src/sass/**/*',
  targetStyle     : 'build/css/',
  sassOptions     : {
    errLogToConsole: true,
    outputStyle: 'expanded'
  },
  autoprefixerOptions : {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
  }
}

gulp.task('sass', function(){
  return gulp
  .src(settings.sourceStyle)
  .pipe(sourceMaps.init())
  .pipe(sass(settings.sassOptions).on('error', sass.logError))
  .pipe(ap(settings.autoprefixerOptions))
  .pipe(clean({
    compatibility: 'ie8'
  }))
  .pipe(sourceMaps.write())
  .pipe(gulp.dest(settings.targetStyle));
});

gulp.task('watch', function(){
  return gulp
  .watch(settings.sourceStyle, 'sass')
  .on('change', function(event){
    console.log('File ' + event.path + ' was ' + event.type + ' , running tasks...');
  });
});

gulp.task('default', ['sass', 'watch']);
