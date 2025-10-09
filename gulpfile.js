const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const { parallel, watch, src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const mode = require('gulp-mode')({
    modes: ["production", "development"],
    default: "development",
    verbose: false
});

function processcss() {
    return src('client/src/scss/**/*.scss')
        .pipe(mode.development(sourcemaps.init()))
        .pipe(sass({
            includePaths: ['node_modules'],
            silenceDeprecations: ['legacy-js-api', 'slash-div', 'import'],
            quietDeps: true
        })).on('error', sass.logError)
        .pipe(autoprefixer({'grid': 'no-autoplace'}))
        .pipe(mode.production(cleanCSS({level:1, inline: ['local']})))
        .pipe(mode.development(sourcemaps.write('../../dist/css/maps')))
        .pipe(dest('client/dist/css'))
}

function transpileJS() {
    return src('client/src/javascript/**/*.js')
        .pipe(mode.development(sourcemaps.init()))
        .pipe(babel({
            presets: [
                '@babel/preset-env'
            ]
        }))
        .pipe(mode.production(uglify()))
        .pipe(mode.development(sourcemaps.write('../../dist/javascript/maps')))
        .pipe(dest('client/dist/javascript'))
}

function copyjsfiles() {
    return src([
        'node_modules/photoswipe/dist/photoswipe.esm.js',
        'node_modules/photoswipe/dist/photoswipe-lightbox.esm.js'
    ]).pipe(dest('client/dist/javascript'));
}

function copycssfiles() {
    return src(['node_modules/photoswipe/dist/photoswipe.css']).pipe(dest('client/dist/css'));
}

function watchfiles() {
    watch('client/src/javascript/**/*.js', {queue: false}, transpileJS);
    watch('client/src/scss/**/*.scss', {queue: false}, processcss);
}

// Export tasks
exports.processcss = processcss;
exports.transpileJS = transpileJS;
exports.copyjsfiles = copyjsfiles;
exports.copycssfiles = copycssfiles;
exports.watch = watchfiles;

// Default now runs JS, CSS, and Photoswipe copy
exports.default = parallel(transpileJS, processcss, copyjsfiles, copycssfiles);
