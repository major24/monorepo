module.exports.subtract = function(a, b) {

    var log4js = require('log4js');
    var logger = log4js.getLogger();
    logger.level = 'debug';
    logger.debug("From subtraction module..");

    return a - b;
}