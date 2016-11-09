const Authetication = require('./controllers/authentication');

exports.signup = function(req, res, next) {
  res.send({ success: 'true' });
}