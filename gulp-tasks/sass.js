var gulp = require('gulp'),
	//sourcemaps = require('gulp-sourcemaps'),
	sass = require('gulp-sass');

gulp.task('sass', function () {
	var stream = gulp.src('app/resources/css/styles.scss')
		//.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		//.pipe(sourcemaps.write('/maps'))
		//.pipe(cssHint())
		.pipe(gulp.dest('app/resources/css'));
		//.pipe(connect.reload());

	return stream;
});
