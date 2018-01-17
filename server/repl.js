const repl = require('repl').start({});
const lodash = require('lodash');
const helpers = require('./helpers');
const models = require('./models');


// ----------------------------------------
// Libs
// ----------------------------------------
repl.context.lodash = lodash;


// ----------------------------------------
// Helpers
// ----------------------------------------
repl.context.helpers = helpers;
Object.keys(helpers).forEach(key => {
  repl.context[key] = helpers[key];
});


// ----------------------------------------
// Models
// ----------------------------------------
repl.context.models = models;
Object.keys(models).forEach(key => {
  repl.context[key] = models[key];
});


// ----------------------------------------
// Logging
// ----------------------------------------
repl.context.lg = console.log;
