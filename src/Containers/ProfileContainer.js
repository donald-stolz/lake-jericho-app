// NOTE:
// Actions Needed
//	- getClient
// 	- updateClient
// 	- removeClient
//
// Data Used
// 	- client
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {
	updateClient,
	removeClient,
 	fetchClient
} from '../Actions'

import ProfilePage from '../Components/ProfilePage'

const mapStateToProps = (state) => ({
	client: state.selected.client,
	loading: state.selected.loading,
	error: state.selected.error
})

const mapDispatchToProps = (dispatch) => ({
	get:		bindActionCreators(fetchClient, dispatch),
	update: bindActionCreators(updateClient, dispatch),
	remove: bindActionCreators(removeClient, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
