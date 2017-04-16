

var modB = require('./mod-b');

module.exports = function() {
  return modB() + " modC";
};