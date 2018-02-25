import{
	FETCH_CLIENT,
	RETURN_CLIENT,
	UPDATE_CLIENT,
} from '../constants/constants';
import {fetchList} from './listActions'

import {clients} from '../constants/ClientDB'
// var Datastore = require('nedb');
// var clients = new Datastore({ filename: 'clients', autoload: true });

export const fetchClient = ( clientID ) =>{
	return (dispatch) => {
		// console.log("fetching: " + clientID);
		dispatch( {type: FETCH_CLIENT} )
		clients.findOne({ _id: clientID }, function (err, doc) {
	    // console.log('Found user:', doc);
			dispatch({ type: RETURN_CLIENT, payload: doc });
	  });
	};
}

export const updateClient = ( client ) =>{
	return(dispatch) => {
		dispatch({type: UPDATE_CLIENT, payload: client})
		clients.update({_id: client._id}, client, {}, function (err, numReplaced) {
	    // console.log("Updated " + numReplaced + " Client");
			dispatch(fetchList());
	  });
	}
}
