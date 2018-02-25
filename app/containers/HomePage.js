// NOTE:
// Actions Needed
// 	- fetchList
//
// Data Needed
// 	- clientList
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { fetchList } from '../actions'

import Home from '../components/Home'

const mapStateToProps = (state) => ({
	clients: state.list.clientList,
	loading: state.list.loading,
	error: state.list.error
})

const mapDispatchToProps = (dispatch) => ({
	getList: bindActionCreators(fetchList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
