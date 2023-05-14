'use strict'

const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const postcss = require('gulp-postcss');

function css() {
    const tailwindcss = require('tailwindcss');

    return gulp.src('./src/styles/main.scss')
        .pipe(sass())
        .pipe(postcss([
            tailwindcss('./tailwind.config.js'),
            require('autoprefixer'),
        ]))
        .pipe(cleanCss())
        .pipe(gulp.dest('./src/css'))
}

exports.css = css