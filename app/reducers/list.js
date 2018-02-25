import{
	RETURN_LIST,
	UPDATE_LIST
} from '../constants/constants';

const INITIAL_STATE = {
	loading: true,
	error: null,
	clientList: [],
};

export default ( state = INITIAL_STATE, action ) => {
	switch (action.type) {
		case RETURN_LIST:
			return { ...state, loading: false, clientList: action.payload };
		case UPDATE_LIST:
			return { ...state, loading: true};
		default:
			return state;
	}
}
