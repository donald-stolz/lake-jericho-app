import{
	FETCH_ALL,
	RETURN_ALL,
	FETCH_CLIENT,
	RETURN_CLIENT,
	ADD_CLIENT,
	UPDATE_CLIENT,
	REMOVE_CLIENT,
} from '../constants/constants';

const INITIAL_STATE = {
	loading: true,
	activeClient: {},
	clients: []
};

export default ( state = INITIAL_STATE, action ) => {
	switch (action.type) {
		case FETCH_ALL:
			return { INITIAL_STATE };
		case RETURN_ALL:
			return { ...state, loading: false, clients: action.payload };
		case FETCH_CLIENT:
			return { ...state, loading: true};
		case RETURN_CLIENT:
			return { ...state, loading: false, activeClient: action.payload };
		case UPDATE_CLIENT:
			return { ...state, activeClient: action.payload };
		case ADD_CLIENT:
			return { ...state, clients: state.clients.concat(action.payload)};
		case REMOVE_CLIENT:
			return { ...state, clients: state.clients.filter(client => client._ID !== action.payload)};
		default:
			return state;
	}
}
