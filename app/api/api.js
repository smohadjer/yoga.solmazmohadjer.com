const sessions = require('../bin/sessions.js');
const path = require('path');

exports.findById = function(teacherId) {
	console.log('dirname: ', __dirname);

	const data = sessions.getJson(path.join(__dirname, '../assets/schedule.json'));
	const yogaSessions = sessions.getSessions(data);

	sessions.sortSessions(yogaSessions);

	const session = sessions.getNextSession(yogaSessions, teacherId);
	var testHtml = 'No classes were found!';

	if (session) {
		sessions.updateView([session], path.join(__dirname, '../resources/hbs/listing.hbs'), undefined, function(html) {
			testHtml = html;
		});
	}

	return testHtml;
};
