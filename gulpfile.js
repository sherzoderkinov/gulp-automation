const {src, dest, watch, series, parallel} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const autoprefixer = require('gulp-autoprefixer')

const styles = () => {
  return src(`assets/css/scss/**/*.scss`)
    .pipe(sass())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 3 versions'],
        cascade: false
      })
    )
    .pipe(csso())
    .pipe(dest(`assets/css`))
}

const watcher = () => {
  watch(`assets/css/scss/**/*.scss`, styles)
}

const init = series(styles)

exports.default = parallel(init, watcher)
