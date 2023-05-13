'use strict'

const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');

function css() {
    const tailwindcss = require('tailwindcss');

    return gulp.src('./src/styles/main.scss')
        .pipe(sass())
        .pipe(postcss([
            tailwindcss('./tailwind.config.js'),
            require('autoprefixer'),
        ]))
        .pipe(gulp.dest('./src/css'))
}

exports.css = css