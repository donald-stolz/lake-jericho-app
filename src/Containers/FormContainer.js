// NOTE:
// Actions Needed
// 	- addClient
import React from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { updateClient, removeClient } from '../actions'

import NewClient from '../Components/NewClient'

const mapStateToProps = (state) => ({
// NOTE: Do I need anything?
})

const mapDispatchToProps = (dispatch) => ({
	update: bindActionCreators(updateList, dispatch)
	add: bindActionCreators(addClient, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
