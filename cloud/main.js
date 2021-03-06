var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/

/* 'getConfig' server side REST API method.
 * Trivial example of pulling in a shared config file.
 */
exports.getConfig = function(params, callback) {
  console.log("In getConfig() call");
  console.log(params.key);
  console.log(params.peter);
  
  var config = require("config.js");
  return callback(null, {madeUpKey: config.cloudObject1, otherKey: config.ABC});
};

exports.sendStuff = function(params, callback) {
  console.log("In sendStuff() call");
  console.log(params.key);

  
  var config = require("config.js");
  return callback(null, {madeUpKey: config.cloudObject1, otherKey: config.ABC});
};

