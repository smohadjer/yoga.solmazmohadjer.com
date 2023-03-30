const fs = require('fs');
const path = require('path');

console.log('fetching dependencies...');
const content = fs.readFileSync('projectConfig.json');
const config = JSON.parse(content);

console.log('json is ready');

//fs.rmSync('lib', { recursive: true, force: true });

if (config.api) {
  config.api.forEach(function(source) {
    const filename = path.basename(source);
    const dir = 'app/api/lib';
    const destination = `${dir}/${filename}`;

    const process = require('process');
    console.log("Present working directory: " + process.cwd());

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }

    console.log(source, destination);

    fs.copyFileSync(source, destination);
  });
}
