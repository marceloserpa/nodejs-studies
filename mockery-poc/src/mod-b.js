
var modA = require('./mod-a');

module.exports = function() {
  return modA() + " modB";
};