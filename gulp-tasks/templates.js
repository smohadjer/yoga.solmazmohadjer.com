var gulp = require('gulp'),
	//precompiling handlebars templates
	wrap = require('gulp-wrap'),
	declare = require('gulp-declare'),
	concat = require('gulp-concat'),
	handlebars = require('gulp-handlebars');

//precompile handlebars templates
gulp.task('templates', function() {
	gulp.src('app/resources/templates/*.hbs')
		.pipe(handlebars({
			handlebars: require('handlebars')
		}))
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		.pipe(declare({
			namespace: 'MyApp.templates',
			noRedeclare: true, // Avoid duplicate declarations
		}))
		.pipe(concat('handlebars.templates.js'))
		.pipe(gulp.dest('app/resources/js/'));
});
