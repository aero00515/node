var colors = require('colors/safe');

console.log("%s %s", colors.green.bgRed('Text'), colors.red.bgGreen('Color!'));

console.log(`${colors.green.bgRed('Text')} ${colors.red.bgGreen('Color!')}`);