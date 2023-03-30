const https = require('https');
const http = require('http');
const fs = require('fs');
const dotenv = require ('dotenv');
const sessions = require('./sessions');
const json = sessions.getJson('app/assets/schedule.json');
const teachers = json.config['active-teachers'];

dotenv.config();

const getNextClass = (teacherId) => {
  const protocol = process.env.protocol;
  const domain = process.env.domain;
  const url = `${protocol}://${domain}/api/endpoint/?id=${teacherId}`;
  const server = (protocol === 'http') ? http : https;

  server.get(url, res => {
    let data = [];
    //console.log('Status Code:', res.statusCode);
    res.on('data', chunk => {
      data.push(chunk);
    });
    res.on('end', () => {
      const markup = Buffer.concat(data).toString();
      if (!fs.existsSync('app/content/partials/class')){
        fs.mkdirSync('app/content/partials/class');
      }
      fs.writeFileSync(`app/content/partials/class/${teacherId}.html`, markup);
    });
  }).on('error', err => {
    console.log('Error: ', err.message);
  });
};

teachers.forEach(teacher => {
  getNextClass(teacher);
});


