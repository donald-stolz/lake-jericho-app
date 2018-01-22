import{
	RETURN_LIST,
	UPDATE_LIST
} from '../Constants/constant';

import {clients} from '../Constants/clientDB'

export const fetchList = () =>{
	return (dispatch) => {
		dispatch({ type: UPDATE_LIST })
		// 2nd object specifies which field(s) to return
		// _id is include with every doc unless specified
		clients.find({}, { personal.name: 1 }, function (err, docs) {
	    console.log(docs);
	    dispatch({ type: RETURN_LIST, payload: docs})
	  });
	}
}

export const addClient = ( client ) =>{
	return (dispatch) => {
		// Add client to DB
		dispatch({ type: UPDATE_LIST })
		clients.insert(client, function (err, doc) {
	    console.log('Inserted', doc.personal.name, 'with ID', doc._id);
			//Refresh list data
			dispatch(fetchList());
	  });
	}
}

export const removeClient = ( clientID ) =>{
	// async - like add client
	return (dispatch) => {
		dispatch({ type: UPDATE_LIST })
		clients.remove({ _id: clientID }, {}, function (err, numRemoved) {
			console.log("Removed " + numRemoved + " client");
			//Refresh list data
			dispatch(fetchList())
		});
	}
}
