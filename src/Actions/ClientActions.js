import{
	FETCH_ALL,
	FETCH_CLIENT,
	ADD_CLIENT,
	UPDATE_CLIENT,
	REMOVE_CLIENT,
} from '../constants/constants';

export const fetchAll = () =>{
	clients.find({}, function (err, docs) {
    console.log(docs);
    set(docs)
  });
}

export const fetchClient = () =>{
	clients.findOne({ _id: clientID }, function (err, doc) {
    console.log('Found user:', doc);
    set(doc)
  });
}

export const addClient = () =>{
	clients.insert(client, function (err, doc) {
    console.log('Inserted', doc.personal.name, 'with ID', doc._id);
  });
}

export const updateClient = () =>{
	clients.update({_id: client._id}, client, {}, function (err, numReplaced) {
    console.log("Updated " + numReplaced + " Client");
  });
}

export const removeClient = () =>{
	clients.remove({ _id: clientID }, {}, function (err, numRemoved) {
		console.log("Removed " + numRemoved + " client");
	});
}
