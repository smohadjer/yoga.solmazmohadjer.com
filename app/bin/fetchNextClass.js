const https = require('https');
const fs = require('fs');
const sessions = require('../sessions');
const json = sessions.getJson('app/assets/schedule.json');
const teachers = json.config['active-teachers'];
const getNextClass = (teacherId) => {
  //const url = `http://localhost:3000/api/endpoint/?id=${teacherId}`;
  const url = `https://yoga-api-rho.vercel.app/api/endpoint/?id=${teacherId}`;
  https.get(url, res => {
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


