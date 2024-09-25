var i18n = require('i18n');

i18n.configure({
  // setup some locales - other locales default to en silently
  locales:['en', 'de','fr','ar','hu','it','ro','ru','se'],

  // where to store json files - defaults to './locales' relative to modules directory
  directory: __dirname + '/locales',
});

module.exports = function(req, res, next) {

  i18n.init(req, res);
  // res.local('__', res.__);

  // var current_locale = i18n.getLocale();
  // req.setLocale('iw')
  console.log(req.params,"asdasds")
  return next();
};