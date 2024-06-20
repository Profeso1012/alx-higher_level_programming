#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (arguments.length <= 1) {
      return;
    }
    if (w <= 0 || h <= 0) {
      return;
    }
    this.height = h;
    this.width = w;
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  rotate () {
    const temp = this.height;
    this.height = this.width;
    this.width = temp;
  }

  double () {
    this.height *= 2;
    this.width *= 2;
  }
}

module.exports = Rectangle;
