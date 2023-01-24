console.log('__dirname: ', __dirname);
const process = require('process');
console.log("Present working directory: " + process.cwd());

const sessions = require('../lib/sessions.js');

exports.findAll = function(req, res){
/*
  res.status(200).send([{
    "id": 1,
    "name": "Max",
    "band": "Maximum Pain",
    "instrument": "guitar"
  }]);
*/
};

exports.findById = function(req, res) {
	var teacherId = req.params.id;

	// for debugging path issues use process.cwd()
	//console.log(process.cwd());

	console.log(teacherId);

	var data = sessions.getJson('app/api/lib/schedule.json');
	var yogaSessions = sessions.getSessions(data);
	sessions.sortSessions(yogaSessions);
	var session = sessions.getNextSession(yogaSessions, teacherId);

	if (session) {
		sessions.updateView([session], 'app/api/lib/listing.hbs', undefined, function(html) {
			res.status(200).send(html);
		});
	} else {
		res.status(200).send('No classes were found!');
	}
};

exports.add = function() {};
exports.update = function() {};
exports.delete = function() {};
