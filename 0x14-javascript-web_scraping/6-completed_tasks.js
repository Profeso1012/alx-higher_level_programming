#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  try {
    const todos = JSON.parse(body);
    const completedTasksByUser = {};

    todos.forEach(todo => {
      if (todo.completed) {
        const userId = todo.userId;
        if (!completedTasksByUser[userId]) {
          completedTasksByUser[userId] = 0;
        }
        completedTasksByUser[userId] += 1;
      }
    });

    console.log(completedTasksByUser);
  } catch (e) {
    console.error('Failed to parse JSON:', e);
  }
});
