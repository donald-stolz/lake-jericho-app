import{
	FETCH_CLIENT,
	RETURN_CLIENT,
	UPDATE_CLIENT,
} from '../constants/constants';

const INITIAL_STATE = {
	loading: true,
	error: null,
	client: {},
};

export type clientStateType = {
  +client: object
};

type actionType = {
  +type: string
};

export default ( state = INITIAL_STATE, action ) => {
	switch (action.type) {
		case FETCH_CLIENT:
			return { ...state, loading: true};
		case RETURN_CLIENT:
			return { ...state, loading: false, client: action.payload };
		case UPDATE_CLIENT:
			return { ...state, client: action.payload };
		default:
			return state;
	}
}
