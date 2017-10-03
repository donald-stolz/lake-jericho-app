var Datastore = require('nedb');
var clients = new Datastore({ filename: 'clients', autoload: true });

var exports = module.exports = {};

exports.addClient = function(client) {
  clients.insert(client, function (err, doc) {
    console.log('Inserted', doc.personal.name, 'with ID', doc._id);
  });
}

// TODO: Use push to record performance (Optional)
// exports.pushPerformance = function(clientID, accNum, performance) {
//   var account = "accounts." + accNum +".performanceHist"
//   console.log(account);
//   clients.update({ _id: clientID }, { $push: { account: performance } }, {}, function (err, num, docs) {
//     console.log(docs);
//   });
// }

exports.updateClient = function(client) {
  //console.log(client);
  clients.update({_id: client._id}, client, {}, function (err, numReplaced) {
    console.log("Updated " + numReplaced + " Client");
  });
}

exports.getClient = function(clientID, set) {
  clients.findOne({ _id: clientID }, function (err, doc) {
    console.log('Found user:', doc);
    set(doc)
  });
}

exports.setIndex = function(set) {
  clients.find({}, function (err, docs) {
    console.log(docs);
    set(docs)
  });
}

exports.removeClient = function(clientID) {
  clients.remove({ _id: clientID }, {}, function (err, numRemoved) {
    console.log("Removed " + numRemoved + " client");
  });
}

exports.clearDB = function() {
  clients.remove({}, { multi: true }, function (err, numRemoved) {
    console.log("Removed " + numRemoved + " client(s)");
  });
}
