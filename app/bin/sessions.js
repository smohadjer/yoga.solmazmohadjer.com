var fs = require('fs');
var moment = require('moment');
var handlebars = require('handlebars');

var getTeachers = function(data, teacherId) {
	let teachers = [];
	var teacher;
	var getTeacher = function(id) {
		let teachersList = data.config['teachers-list'];
		let teacher = [];
		teachersList.forEach(function(value) {
			if (value.id === id) {
				teacher = value;
				return false;
			}
		});
		return teacher;
	};

	if (typeof teacherId === 'object') {
		teacherId.forEach(function(id) {
			teacher = getTeacher(id);
			teachers.push(teacher);
		});
	} else {
		teacher = getTeacher(teacherId);
		teachers.push(teacher);
	}

	return teachers;
};

var addSession = function(data, arr, newDate, yogaClass, teacherId, title) {
	var isToday = (newDate.isSame(moment(), 'day')) ? true : false;
	var obj = {
		'date': newDate,
		'dayofweek': isToday ? 'Today' : newDate.format('dddd'),
		'month': newDate.format('MMM'),
		'daynumber': newDate.format('D'),
		'hours': yogaClass['start-time'] + ' - ' + yogaClass['end-time'],
		'courseId': yogaClass['class-id'],
		'courseName': title,
		'level': yogaClass.level,
		'address': yogaClass.address,
		'teachers': getTeachers(data, teacherId)
	};

	if (isToday) {
		obj.class = "today";
	}

	arr.push(obj);
};

exports.getJson = function (url) {
	var file = fs.readFileSync(url, 'utf8');
	if (file) {
		return JSON.parse(file);
	}
};

exports.getSessions = function(data) {
	var yogaSessions = [];
	var start = moment();
	var end = moment(data.config.end);

	data.sessions.forEach(function(elm) {
		var yogaClass = elm;
		var momObject;
		var newDate;

		if (yogaClass.repeats) {
			if (yogaClass['repeat-cycle'] === 'week') {
				var period = yogaClass['day-of-week'] + ' ' + yogaClass['start-time'];
				var startDate = yogaClass['start-date'];
				var endDate = yogaClass['end-date'];
				var canceledDates = yogaClass.cancelations;

				//if startDate is not provided, set today as startDate
				if (endDate && !startDate) {
					startDate = moment().format('YYYY-MM-DD');
				}

				momObject = moment(period, 'dddd HH:mm');
				newDate = momObject.clone();

				while (newDate.isValid() && newDate.isSameOrBefore(end)) {
					if (newDate.isSameOrAfter(start)) {
						var dateIsValid = true;

						if (startDate && endDate) {
							dateIsValid = newDate.isBetween(startDate, endDate, 'day', '[]');
						}

						if (canceledDates) {
							//$.each(canceledDates, function(key, value) {
							canceledDates.some(function(value, key) {
								if (newDate.isSame(value.date, 'day')) {
									dateIsValid = false;
									return false;
								}
							});
						}

						if (dateIsValid) {
							var teacherId = yogaClass['teacher-id'];
							var title = yogaClass.title;

							if (yogaClass.dates) {
								//update teacher
								yogaClass.dates.some(function(value, key) {
									if (newDate.isSame(value.date, 'day')) {
										teacherId = value['teacher-id'];
										return false;
									}
								});
							}

							addSession(data, yogaSessions, newDate.clone(), yogaClass, teacherId, title);
						}
					}

					newDate.add(1, 'week');
				}
			}
		} else {
			yogaClass.dates.forEach(function(value) {
				var period = value.date + ' ' + yogaClass['start-time'];
				momObject = moment(period, 'YYYY-MM-DD HH:mm');
				var teacherId = value['teacher-id'] ? value['teacher-id'] : yogaClass['teacher-id'];
				var title = value.title ? value.title : yogaClass.title;
				if (momObject.isSameOrAfter(start) && momObject.isSameOrBefore(end)) {
					addSession(data, yogaSessions, momObject, yogaClass, teacherId, title);
				}
			});
		}

	});

	return yogaSessions;
};

exports.sortSessions = function(yogaSessions) {
	yogaSessions.sort(function(a, b) {
		var date1 = a.date;
		var date2 = b.date;
		if (date1.isBefore(date2)) {
			return -1;
		}
		if (date2.isBefore(date1)) {
			return 1;
		}
	});
};

exports.getNextSession = function(yogaSessions, teacherId) {
	var tempSession = {};
	var sessionFound = false;

	yogaSessions.some(function(session) {
		// Refactor this so if a session has more than one teacher you iterate over teachers array instead of getting only the first teacher
		if (session.teachers[0].id === teacherId) {
			tempSession = session;
			sessionFound = true;
			return true;
		}
	});

	return (sessionFound) ? tempSession : undefined;
};

exports.updateView = function(yogaSessions, templateFile, targetFile, callback) {
	var html = '';

	handlebars.registerHelper('dec', function(value, options) {
	    return parseInt(value) - 1;
	});

	handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

	    switch (operator) {
	        case '==':
	            return (v1 == v2) ? options.fn(this) : options.inverse(this);
	        case '===':
	            return (v1 === v2) ? options.fn(this) : options.inverse(this);
	        case '!=':
	            return (v1 != v2) ? options.fn(this) : options.inverse(this);
	        case '!==':
	            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
	        case '<':
	            return (v1 < v2) ? options.fn(this) : options.inverse(this);
	        case '<=':
	            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
	        case '>':
	            return (v1 > v2) ? options.fn(this) : options.inverse(this);
	        case '>=':
	            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
	        case '&&':
	            return (v1 && v2) ? options.fn(this) : options.inverse(this);
	        case '||':
	            return (v1 || v2) ? options.fn(this) : options.inverse(this);
	        default:
	            return options.inverse(this);
	    }
	});

	const source = fs.readFileSync(templateFile, 'utf-8');
	const template = handlebars.compile(source);

	yogaSessions.forEach(function(value) {
		html += template(value);
	});

	if (targetFile) {
		fs.writeFile(targetFile, html, function(err) {
			if (err) {
				return console.log(err);
			}
		});
	} else {
		callback(html);
	}
};
