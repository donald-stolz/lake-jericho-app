var Datastore = require('nedb');
var clients = new Datastore({ filename: 'src/Data/clients.db', autoload: true });

var exports = module.exports = {};

exports.addClient = function(client) {
  clients.insert(client,function (err, doc) {
    console.log('Inserted', doc.name, 'with ID', doc._id);
  });
}

exports.recordPerformance = function() {

}

exports.updateClient = function(client) {
  clients.update({_id: client._id}, {client}, {}, function (err, numReplaced) {
    console.log("Updated Client");
  });
}

exports.setClient = function(clientID, set) {
  clients.findOne({ _id: clientID }, function (err, doc) {
    console.log('Found user:', doc.name);
    set(doc)
  });
}

exports.setIndex = function(set) {
  clients.find({}, function (err, docs) {
    console.log(docs);
    set(docs)
  });
}

exports.removeClient = function() {
  clients.remove({ _id: 'id2' }, {}, function (err, numRemoved) {
    console.log("Removed " + numRemoved + " client");
  });
}

exports.clearDB = function() {
  clients.remove({}, { multi: true }, function (err, numRemoved) {
    console.log("Removed " + numRemoved + " client(s)");
  });
}
