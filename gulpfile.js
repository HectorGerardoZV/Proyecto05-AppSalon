const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");

const paths = {
    scss: "./src/scss/**/*.scss",
    js: "./src/js/**/*.js"
}


function css() {
    return src(paths.scss)
        .pipe(sass())
        .pipe(dest("./build/css"));
}

function js() {
    return src(paths.js)
        .pipe(concat("bundle.js"))
        .pipe(dest("./build/js"));
}


function observer() {
    watch(paths.scss, css);
    watch(paths.js, js);
}

exports.default = series(css, js, observer);