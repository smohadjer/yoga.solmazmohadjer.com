const fs = require('fs');
const sessions = require('./sessions');
const json = sessions.getJson('app/assets/schedule.json');
const teachers = json.config['active-teachers'];
const api = require('./api');

teachers.forEach(teacherId => {
  const markup = api.findById(teacherId);
  if (!fs.existsSync('app/content/partials/class')){
    fs.mkdirSync('app/content/partials/class');
  }
  fs.writeFileSync(`app/content/partials/class/${teacherId}.html`, markup);
});


