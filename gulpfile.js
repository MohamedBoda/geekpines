const gulp = require('gulp');  
      pug = require('gulp-pug'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create(),
      csso = require('gulp-csso'),
      gcmq = require('gulp-group-css-media-queries'),
      postcss      = require('gulp-postcss'),
      sourcemaps   = require('gulp-sourcemaps'),
      autoprefixer = require('autoprefixer'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify'),
      PRODUCTION = './production';

gulp.task('sass', function () {
    return gulp.src('scss/app.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(sourcemaps.init())
     .pipe(postcss([ autoprefixer({
        browsers: ['> 1%', 'last 10 versions', 'Firefox >= 20', 'iOS >=7'],
        grid: "autoplace" 
    }
    ) ]))
     .pipe(csso())
     .pipe(gulp.dest(PRODUCTION + '/css'));
});
gulp.task('js', function() {
    return gulp.src('js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(PRODUCTION + '/js'));
});
gulp.task('pug', function () {
    return gulp.src(['pug/index.pug'])
     .pipe(pug({pretty: true}))
     .pipe(gulp.dest(PRODUCTION));
});
gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', {cwd:'./'}, ['sass']);
    gulp.watch("js/**/**.js", {cwd:'./'}, ['js']);   
    gulp.watch("pug/**/**.pug", {cwd:'./'}, ['pug']);
    gulp.watch('assets/images/*.*', {cwd:'./'}, ['copy-imgs']);
    gulp.watch('assets/images/*.*', {cwd:'./'}, ['copy-fonts']);
    gulp.watch('assets/*.*', {cwd:'./'}, ['copy-assets']);
});
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: PRODUCTION
        },
        browser: "chrome",
        files: [PRODUCTION + "/css**/*.css", PRODUCTION + "/*.html"]
    });
});
gulp.task('copy-assets', function() {
    return gulp.src('./assets/*.*')
        .pipe(gulp.dest(PRODUCTION + '/assets'))
});
gulp.task('copy-imgs', function() {
    return gulp.src('./assets/images/*.*')
        .pipe(gulp.dest(PRODUCTION + '/assets/images'))
});
gulp.task('copy-fonts', function() {
    return gulp.src('./assets/fonts/*.*')
        .pipe(gulp.dest(PRODUCTION + '/assets/fonts'))
});
gulp.task('copy', ['copy-assets', 'copy-imgs','copy-fonts']);
gulp.task('default', ['copy','server' ,'watch' ]);