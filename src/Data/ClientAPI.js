var Datastore = require('nedb');
var clients = new Datastore({ filename: 'src/Data/clients.db', autoload: true });

var exports = module.exports = {};

exports.addClient = function(client) {
  clients.insert(client,function (err, newDoc) {

  });
}

exports.recordPerformance = function() {

}

exports.updateClient = function() {

}

exports.findClient = function() {

}

exports.getClients = function() {

}

exports.removeClient = function() {

}

exports.clearDB = function() {

}
