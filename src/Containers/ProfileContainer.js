// NOTE:
// Actions Needed
// 	- updateClient
// 	- removeClient
//
// Data Needed
// 	- client
import React from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { updateClient, removeClient } from '../actions'

import ProfilePage from '../Components/ProfilePage'

const mapStateToProps = (state) => ({
	list: state.selected.client,
	loading: state.selected.loading,
	error: state.selected.error
})

const mapDispatchToProps = (dispatch) => ({
	update: bindActionCreators(updateClient, dispatch)
	remove: bindActionCreators(removeClient, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
