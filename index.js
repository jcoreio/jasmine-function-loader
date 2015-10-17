var path = require("path");
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var source = [
    'module.exports = function(jasmine) {',
    '  eval(require(' +
      loaderUtils.stringifyRequest(this, require.resolve('./jasmineVarInject')) +
      ')(jasmine));',
    '',
    source,
    '',
    '}',
  ];
  this.callback(null, source.join('\n'));
};
