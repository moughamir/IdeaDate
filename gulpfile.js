const gulp = require('gulp');
const sass = require('gulp-sass');
const ap = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const bsync = require('browser-sync');

const settings = {
  sourceStyle: 'src/sass/main.scss',
  targetStyle: 'build/css/',
  assetsSource: 'src/assets/*',
  assetsTarget: 'build/assets/',
  sassOptions: {
    errLogToConsole: true,
    outputStyle: 'expanded'
  },
  autoprefixerOptions: {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
  }
}

gulp.task('sass', function() {
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

gulp.task('imagemin', () =>
  gulp.src(settings.assetsSource)
  .pipe(imagemin())
  .pipe(gulp.dest(settings.assetsTarget))
);

gulp.task('watch', function() {
  return gulp
    .watch([settings.sourceStyle], ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ' , running tasks...');
    });
});

gulp.task('sync', function() {
  bsync.init([settings.targetStyle + '*.css', 'build/js/*.js', 'build/*.html'], {
    server: {
      baseDir: "./build/"
    },
    port: 8080,
    ui: {
      port: 8081,
      weinre: {
        port: 8082
      }
    }
  });
});

gulp.task('default', ['sass', 'watch', 'sync']);
