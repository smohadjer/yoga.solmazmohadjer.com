var gulp = require('gulp'),
	gulpif = require('gulp-if'),
	useref = require('gulp-useref'),
	uglify = require('gulp-uglify'),
	debug = require('gulp-debug');

	gulp.task('useref', function() {
	var stream = gulp.src('app/include/*')
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(debug({title: 'DEBUG:'}))
		.pipe(gulp.dest('.tmp'));
	return stream;
});
