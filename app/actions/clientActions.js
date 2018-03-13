import { ipcRenderer } from 'electron';
import{
	FETCH_CLIENT,
	RETURN_CLIENT,
	UPDATE_CLIENT,
} from '../constants/constants';
import {fetchList} from './listActions'

export const fetchClient = ( clientID ) =>{
	return (dispatch) => {
		dispatch( {type: FETCH_CLIENT} )
		ipcRenderer.send(FETCH_CLIENT, clientID)
		ipcRenderer.on(RETURN_CLIENT, (event, client) => {
			dispatch({ type: RETURN_CLIENT, payload: client });
		})
	};
}

export const updateClient = ( client ) =>{
	return(dispatch) => {
		dispatch({type: UPDATE_CLIENT, payload: client})
		ipcRenderer.send(UPDATE_CLIENT, client);
		fetchClient(client._id)
	}
}
