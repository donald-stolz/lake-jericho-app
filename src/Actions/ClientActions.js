import{
	FETCH_ALL,
	RETURN_ALL,
	FETCH_CLIENT,
	RETURN_CLIENT,
	ADD_CLIENT,
	UPDATE_CLIENT,
	REMOVE_CLIENT,
} from '../constants/constants';

var Datastore = require('nedb');
var clients = new Datastore({ filename: 'clients', autoload: true });

export const fetchAll = () =>{
	return (dispatch) => {
		dispatch({ type: FETCH_ALL })
		// TODO: Update to only return Names & ID
		clients.find({}, function (err, docs) {
	    console.log(docs);
	    dispatch({ type: RETURN_ALL, payload: docs})
	  });
	}
}

export const fetchClient = ( clientID ) =>{
	return (dispatch) => {
		dispatch( {type: FETCH_CLIENT} )
		clients.findOne({ _id: clientID }, function (err, doc) {
	    console.log('Found user:', doc);
			dispatch({ type: RETURN_CLIENT, payload: doc })
	  });
	};
}

export const addClient = ( client ) =>{
	clients.insert(client, function (err, doc) {
    console.log('Inserted', doc.personal.name, 'with ID', doc._id);
  });
	dispatch({
		type: ADD_CLIENT,
		payload: client
	})
}

export const updateClient = ( client ) =>{
	clients.update({_id: client._id}, client, {}, function (err, numReplaced) {
    console.log("Updated " + numReplaced + " Client");
  });
	return {
		type: UPDATE_CLIENT,
		payload: client
	};
}

export const removeClient = ( clientID ) =>{
	clients.remove({ _id: clientID }, {}, function (err, numRemoved) {
		console.log("Removed " + numRemoved + " client");
	});
	return {
		type: REMOVE_CLIENT,
		payload: clientID
	};
}
