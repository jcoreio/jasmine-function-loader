module.exports = function(jasmine) {
  var code = ['var env = jasmine.getEnv()'];
  var env = jasmine.getEnv();
  for (var v in env) {
    if (env.hasOwnProperty(v)) {
      code.push('var ' + v + ' = env.' + v);
    }
  }
  return code.join(';');
};
