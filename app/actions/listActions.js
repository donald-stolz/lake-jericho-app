import { ipcRenderer } from 'electron';
import{
	FETCH_LIST,
	RETURN_LIST,
	UPDATE_LIST,
	ADD_CLIENT,
	REMOVE_CLIENT
} from '../constants/constants';

export const fetchList = () =>{
	return (dispatch) => {
		dispatch({ type: FETCH_LIST });
		ipcRenderer.send(FETCH_LIST);
		console.log("sent to electron");
		ipcRenderer.on(RETURN_LIST, (event, clients) => {
			dispatch({ type: RETURN_LIST, payload: clients})
		})
	}
}

export const addClient = ( client ) =>{
	return (dispatch) => {
		dispatch({ type: UPDATE_LIST });
		ipcRenderer.send(ADD_CLIENT, client);
		dispatch(fetchList());
	}
}

export const removeClient = ( clientID ) =>{
	return (dispatch) => {
		dispatch({ type: UPDATE_LIST });
		ipcRenderer.send(REMOVE_CLIENT, clientID);
		dispatch(fetchList());
	}
}
