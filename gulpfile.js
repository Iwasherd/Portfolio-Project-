const gulp = require('gulp');
const pug = require('gulp-pug');

const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const browserSync = require('browser-sync').create();

const autoprefixer = require('gulp-autoprefixer');

const imagemin = require('gulp-imagemin');

const plumber = require('gulp-plumber');







//svg sprite

const svgSprite = require("gulp-svg-sprites");
const cheerio = require('gulp-cheerio');

const paths = {
    root: './build',
    templates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug',
        dest: 'build/'
    },
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'build/styles/css'
    },
    minifyimage : {
        src: 'src/images/*.jpg' ,
        dest: 'build/styles/images'
    },
    sprites: {
        src: 'src/images/icons/*.svg',
        dest: 'build/styles/images/icons'
    }

}

//pug 
function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(plumber())
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.root));
}

// scss
function styles() {
    return gulp.src('./src/styles/app.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed',
                     //normalize css
                    includePaths: require('node-normalize-scss').includePaths
                    }))
        .pipe(sourcemaps.write())
        .pipe(rename({ suffix: '.min' }))
       

        .pipe(gulp.dest(paths.styles.dest))
}

// watcher
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
}

// local serv + livereload
function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

//autoprefixer 
function prefixer() {
    return gulp.src('build/styles/css/app.min.css ')
        .pipe(plumber())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.styles.dest))
}
// image min
function minifyimage() {
    return gulp.src(paths.minifyimage.src)
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest(paths.minifyimage.dest))
}


//make svg sprite
function sprite() {
    return gulp.src(paths.sprites.src)
        .pipe(svgSprite())
        .pipe(gulp.dest(paths.sprites.dest));
};






exports.templates = templates;
exports.styles = styles;
exports.prefixer = prefixer;
exports.minifyimage = minifyimage;
exports.sprite = sprite;


gulp.task('default', gulp.series(
    gulp.parallel(styles, templates, prefixer),
    gulp.parallel(minifyimage),
    gulp.parallel(watch, server)
));