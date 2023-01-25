const process = require('process');

console.log('__dirname: ', __dirname);
console.log('cwd: ', process.cwd());

const sessions = require(process.cwd()+'/api/lib/sessions.js');

exports.findById = function(teacherId) {
	const data = sessions.getJson(process.cwd()+'/api/lib/schedule.json');
	const yogaSessions = sessions.getSessions(data);

	sessions.sortSessions(yogaSessions);

	const session = sessions.getNextSession(yogaSessions, teacherId);
	var testHtml = 'No classes were found!';

	console.log('session: ', session);

	if (session) {
		sessions.updateView([session], process.cwd()+'/api/lib/listing.hbs', undefined, function(html) {
			testHtml = html;
		});
	}

	console.log('html: ', testHtml)

	return testHtml;
};
