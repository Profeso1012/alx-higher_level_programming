#!/usr/bin/node

const rekwest = require('request');
const url = process.argv[2];

rekwest(url, (err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`code: ${res.statusCode}`);
  }
});
