#!/usr/bin/env node

const exec = require('child_process').exec;
var yourscript = exec('sh app/nodejsPath.sh',
        (error, stdout, stderr) => {
            console.log(`Path to nodejs: ${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
