import{
	RETURN_LIST,
	FETCH_CLIENT,
	RETURN_CLIENT,
	UPDATE_CLIENT,
} from '../Constants/constants';

import {clients} from '../Constants/clientDB'
// var Datastore = require('nedb');
// var clients = new Datastore({ filename: 'clients', autoload: true });

export const fetchClient = ( clientID ) =>{
	return (dispatch) => {
		dispatch( {type: FETCH_CLIENT} )
		clients.findOne({ _id: clientID }, function (err, doc) {
	    console.log('Found user:', doc);
			dispatch({ type: RETURN_CLIENT, payload: doc });
	  });
	};
}

export const updateClient = ( client ) =>{
	clients.update({_id: client._id}, client, {}, function (err, numReplaced) {
    console.log("Updated " + numReplaced + " Client");
		dispatch(fetchList());
  });
	// NOTE: Not copying straight from DB
	return {
		type: UPDATE_CLIENT,
		payload: client
	};
}
