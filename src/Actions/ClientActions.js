import{
	FETCH_LIST,
	RETURN_LIST,
	FETCH_CLIENT,
	RETURN_CLIENT,
	ADD_CLIENT,
	UPDATE_CLIENT,
	REMOVE_CLIENT,
} from '../Constants/constants';

var Datastore = require('nedb');
var clients = new Datastore({ filename: 'clients', autoload: true });

export const fetchList = () =>{
	return (dispatch) => {
		dispatch({ type: FETCH_LIST })
		// 2nd object specifies which field(s) to return
		// _id is include with every doc unless specified
		clients.find({}, { personal.name: 1 }, function (err, docs) {
	    console.log(docs);
	    dispatch({ type: RETURN_LIST, payload: docs})
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
	return (dispatch) => {
		// Add client to DB
		dispatch({ type: ADD_CLIENT })
		clients.insert(client, function (err, doc) {
	    console.log('Inserted', doc.personal.name, 'with ID', doc._id);
			//Refresh list data
			dispatch(fetchList())
	  });
	}
}

export const updateClient = ( client ) =>{
	clients.update({_id: client._id}, client, {}, function (err, numReplaced) {
    console.log("Updated " + numReplaced + " Client");
  });
	// NOTE: Not copying straight from DB
	return {
		type: UPDATE_CLIENT,
		payload: client
	};
}

export const removeClient = ( clientID ) =>{
	// async - like add client
	return (dispatch) => {
		dispatch({ type: REMOVE_CLIENT })
		clients.remove({ _id: clientID }, {}, function (err, numRemoved) {
			console.log("Removed " + numRemoved + " client");
			//Refresh list data
			dispatch(fetchList())
		});
	}
}
