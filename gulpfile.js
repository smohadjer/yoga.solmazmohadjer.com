var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	requireDir = require('require-dir');

// Require all tasks.
requireDir('./gulp-tasks', { recurse: true });

var exec = require('child_process').exec;

gulp.task('setNodejsPath', function (cb) {
  exec('app/nodejsPath.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('serve', function(callback) {
	runSequence(
		['setNodejsPath'],
		['clean:tmp'],
		['templates', 'copy:libs', 'sass'],
		['watch'], callback);
});

gulp.task('build', function(callback) {
	runSequence(
		['clean:dist', 'clean:tmp'],
		['templates', 'copy:libs', 'sass'],
		['copy:assets', 'copy:img', 'copy:php', 'copy:fonts', 'copy:hbs', 'copy:build-files'],
		['useref'],
		['copy:tmp-css', 'copy:tmp-js', 'copy:tmp-includes'],
		callback);
});
