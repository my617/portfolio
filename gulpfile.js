var gulp = require('gulp');
var sass = require('gulp-sass');
var packageImporter = require('node-sass-package-importer')

gulp.task('sass', function () {
    return gulp.src('*.scss')
        .pipe(sass({ 
            outputStyle: 'expanded',
            importer: packageImporter({
                extentions: ['.scss', 'css']
            })
        }))
        .pipe(gulp.dest('src/'));
});

gulp.task('sass:watch', () => {
    gulp.watch('*.scss', gulp.series('sass'));
});