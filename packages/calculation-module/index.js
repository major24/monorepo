const addModule = require('addition-module');
const subModule = require('subtraction-module');

console.log('testing lerna monorepo...');
console.log('Testing external modules stored at root, can be used in internal modules..');

console.log('adding 5 + 4 = ', addModule.add(5, 4));
console.log('subtract 7 - 3 = ', subModule.subtract(7, 3));


var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("From calculation module..");

console.log('done');
