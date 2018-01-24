// NOTE:
// Actions Needed
// 	- addClient
//
// No Data Used
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { addClient } from '../Actions'

import NewClient from '../Components/NewClient'

const mapStateToProps = (state) => ({
// NOTE: Do I need anything?
})

const mapDispatchToProps = (dispatch) => ({
	add: bindActionCreators(addClient, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NewClient);
