var fs = require('fs');
var moment = require('moment');
var handlebars = require('handlebars');
var sessions = require('./sessions');

var generateTeachersList = function (data, templateFile, targetFile) {
	fs.readFile(templateFile, 'utf-8', function(error, source){
		var template = handlebars.compile(source);
		var teacherList = data.config['teachers-list'].filter(function(value) {
			return data.config['active-teachers'].indexOf(value.id) !== -1;
		});
		var html = template({
			'list': teacherList
		});

		fs.writeFile(targetFile, html, function(err) {
			if (err) {
				return console.log(err);
			}
		});
	});
};

var generateClassList = function (data, templateFile, targetFile) {
	fs.readFile(templateFile, 'utf-8', function(error, source){
		var template = handlebars.compile(source);
		var classList = data.config['classes-list'].filter(function(value) {
			return data.config['active-classes'].indexOf(value.id) !== -1;
		});

		var html = template({
			'list': classList
		});

		fs.writeFile(targetFile, html, function(err) {
			if (err) {
				return console.log(err);
			}
		});
	});
};

if (!fs.existsSync('./generated')){
	fs.mkdirSync('./generated');
}

var data = sessions.getJson('./content/schedule.json');
var yogaSessions = sessions.getSessions(data);

sessions.sortSessions(yogaSessions);
sessions.updateView(yogaSessions, 'hbs/listing.hbs', 'generated/sessions.html');

generateTeachersList(data, './hbs/teachers-list.hbs', './generated/teachers-list.html');
generateClassList(data, './hbs/classes-list.hbs', './generated/classes-list.html');
