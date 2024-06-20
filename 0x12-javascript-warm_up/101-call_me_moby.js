#!/usr/bin/node
function callMeMoby (num, func) {
  let i;
  for (i = 0; i < num; i++) {
    func();
  }
}

module.exports = { callMeMoby };
