const addModule = require('addition-module');
const subModule = require('subtraction-module');

console.log('testing lerna monorepo...')
console.log('adding 5 + 4 = ', addModule.add(5, 4));
console.log('subtract 7 - 3 = ', subModule.subtract(7, 3));

console.log('done');