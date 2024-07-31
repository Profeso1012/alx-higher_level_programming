#!/usr/bin/node

const rekwest = require('request');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];

rekwest(url, (err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile(filePath, body, 'utf-8', (er) => {
      if (er) {
        console.error(er);
      }
    });
  }
});
