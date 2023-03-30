var fs = require('fs');
var handlebars = require('handlebars');
var sessions = require('./sessions');

var generateTeachersList = function (data, templateFile, targetFile) {
	const source = fs.readFileSync(templateFile, {encoding: 'utf-8'});
	var template = handlebars.compile(source);
	var teacherList = data.config['teachers-list'].filter(function(value) {
		return data.config['active-teachers'].indexOf(value.id) !== -1;
	});
	var html = template({
		'list': teacherList
	});
	fs.writeFileSync(targetFile, html);
	console.log('generated teachers list');
};

var generateClassList = function (data, templateFile, targetFile) {
	const source = fs.readFileSync(templateFile, {encoding: 'utf-8'});
	var template = handlebars.compile(source);
	var classList = data.config['classes-list'].filter(function(value) {
		return data.config['active-classes'].indexOf(value.id) !== -1;
	});
	var html = template({
		'list': classList
	});
	fs.writeFileSync(targetFile, html);
	console.log('generated class list');
};

if (!fs.existsSync('app/content/partials/schedule')){
	fs.mkdirSync('app/content/partials/schedule');
}

var data = sessions.getJson('app/assets/schedule.json');
var yogaSessions = sessions.getSessions(data);

sessions.sortSessions(yogaSessions);
sessions.updateView(yogaSessions, 'app/resources/hbs/listing.hbs', 'app/content/partials/schedule/sessions.html');

generateTeachersList(data, 'app/resources/hbs/teachers-list.hbs', 'app/content/partials/schedule/teachers-list.html');
generateClassList(data, 'app/resources/hbs/classes-list.hbs', 'app/content/partials/schedule/classes-list.html');

console.log('done generating partials');
