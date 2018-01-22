// NOTE:
// Actions Needed
// 	- fetchList
//
// Data Needed
// 	- clientList
import React from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { fetchList } from '../actions'

import Home from '../Components/Home'

const mapStateToProps = (state) => ({
	list: state.list.clientList,
	loading: state.list.loading,
	error: state.list.error
})

const mapDispatchToProps = (dispatch) => ({
	getList: bindActionCreators(fetchList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
