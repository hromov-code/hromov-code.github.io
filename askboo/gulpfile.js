const gulp = require('gulp');
const sass = require('gulp-sass');

function index() {
    return gulp.src("./scss/index.scss").pipe(sass()).pipe(gulp.dest('./css'));
}
function indexResponsive() {
    return gulp.src("./scss/index-responsive.scss").pipe(sass()).pipe(gulp.dest('./css'));
}

function contacts() {
    return gulp.src("./scss/contacts.scss").pipe(sass()).pipe(gulp.dest('./css'));
}

function contactsResponsive() {
    return gulp.src("./scss/contacts-responsive.scss").pipe(sass()).pipe(gulp.dest('./css'));
}

function watch () {
    gulp.watch("./scss/**/*.scss", index);
    gulp.watch("./scss/**/*.scss", indexResponsive);
    gulp.watch("./scss/**/*.scss", contacts);
    gulp.watch("./scss/**/*.scss", contactsResponsive);

}

exports.style = index;
exports.style = indexResponsive;
exports.style = contacts;
exports.style = contactsResponsive;
exports.watch = watch;