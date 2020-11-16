var gulp = require('gulp'),
	npmDist = require('gulp-npm-dist');

gulp.task('copy:assets', function() {
	var stream = gulp.src('app/content/**/*')
		.pipe(gulp.dest('dist/content'));
	return stream;
});

gulp.task('copy:tmp-includes', function() {
	var stream = gulp.src(['.tmp/*.php', '.tmp/*.html'])
		.pipe(gulp.dest('dist/include'));
	return stream;
});

gulp.task('copy:php', function() {
	var stream = gulp.src('app/*.php')
		.pipe(gulp.dest('dist'));
	return stream;
});

gulp.task('copy:hbs', function() {
	var stream = gulp.src('app/hbs/**/*')
		.pipe(gulp.dest('dist/hbs'));
	return stream;
});

gulp.task('copy:img', function() {
	var stream = gulp.src('app/resources/img/**/*')
		.pipe(gulp.dest('dist/resources/img'));
	return stream;
});

gulp.task('copy:tmp-css', function() {
	var stream = gulp.src('.tmp/resources/css/**/*')
		//.pipe(debug({title: 'css*******:'}))
		.pipe(gulp.dest('dist/resources/css'));
	return stream;
});

// copy package.json dependencies to .tmp
gulp.task('copy:libs', function() {
  gulp.src(npmDist({
		"copyUnminified": true
  }), {base:'./node_modules'})
    .pipe(gulp.dest('app/resources/vendor'));
});

gulp.task('copy:tmp-js', function() {
	var stream = gulp.src('.tmp/resources/js/**/*')
		.pipe(gulp.dest('dist/resources/js'));
	return stream;
});

gulp.task('copy:fonts', function() {
	var stream = gulp.src('app/resources/fonts/**/*')
		.pipe(gulp.dest('dist/resources/fonts'));
	return stream;
});

gulp.task('copy:build-files', function() {
	var stream = gulp.src(['app/jsonToHtml.js', 'app/sessions.js', 'app/nodejsPath.sh', 'deploy.php', 'deploy-config.php', 'package.json'])
		.pipe(gulp.dest('dist'));
	return stream;
});
