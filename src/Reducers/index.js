// State = {
// 	selected: {
// 		error: null,
// 		loarding: true,
// 		client:
// 	},
// 	list: {
// 		error: null,
// 		loading: true,
// 		clientList: [{namd, _id}],
// 	}
// }
import { combineReducers } from 'redux'
import ClientReducer from './ClientReducer'
import ListReducer from './ListReducer'

export default combineReducers({
	selected: ClientReducer,
	list: ListReducer
});
