'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

// Задача для компиляции SCSS в CSS
function compileSass() {
  return gulp.src('css/*.scss') // указываем путь к SCSS-файлам
    .pipe(sass().on('error', sass.logError)) // компилируем SCSS
    .pipe(postcss([autoprefixer()])) // добавляем префиксы
    .pipe(gulp.dest('css/')); // сохраняем результат в ту же папку (можно указать другую, например, 'dist/css/')
}

// Задача для автоматического отслеживания изменений
function watchFiles() {
  gulp.watch('css/*.scss', compileSass); // следим за изменениями в SCSS-файлах
}

// Экспортируем задачи
exports.compileSass = compileSass;
exports.watch = watchFiles;
exports.default = gulp.series(compileSass, watchFiles);
