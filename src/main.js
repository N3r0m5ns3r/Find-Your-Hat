const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Finder {
  constructor(field = [[]]) {
    this.field = field;
    this.start = {
      x: 0,
      y: 0
    };
    this.hatPos = {
      x: 0,
      y: 0
    };
    this.locationX = 0;
    this.locationY = 0;
  }
}
