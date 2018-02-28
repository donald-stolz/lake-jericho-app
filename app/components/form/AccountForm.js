import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import LabeledInput from '../common/LabeledInput';
import DatePicker from '../common/DatePicker'
import SimpleSelect from '../common/SimpleSelect'
import PerformanceForm from './PerformanceForm'
import {
	CLIENT_STRUCT,
	TAX_MENU,
	HORIZON_MENU,
	BIAS_MENU } from '../../constants/constants'

const styles = theme => ({
  root: {
		flex: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
		width: '100%'
  },
  buttonBar: {
    paddingTop: 5,
    paddingBottom: 10
  }
});

class AccountForm extends Component {

	constructor(props){
		super(props);
		this.state={ ...CLIENT_STRUCT.accounts[0]}
	}

	// handleChange(event){
	// 	this.setState({
	// 		[event.target.id]: event.target
	// 	})
	// }

  render(){
		const { classes } = this.props;
		const inputChange = this.props.handleChange.bind(this)

    return(
			<div className={classes.root}>
  			<Paper className={classes.container} elevation={6}>
          <AppBar className={classes.container} position="static" color="primary" >
  			    <Toolbar>
  			      <Typography variant="title" color="inherit">
  			        Account Information
  			      </Typography>
  			    </Toolbar>
  			  </AppBar>
					<LabeledInput label={"Account Name"} id={'accName'} onChange={inputChange} />
					<DatePicker 	label={"Start Date"} id={'startDate'} onChange={inputChange} />
					<SimpleSelect label={"Tax"} id={'tax'} menu={TAX_MENU}/>
					<SimpleSelect label={"Horizon"} id={'horizon'} menu={HORIZON_MENU} onChange={inputChange}/>
					<SimpleSelect label={"Bias"} id={'bias'} menu={BIAS_MENU} onChange={inputChange}/>

					<PerformanceForm handleChange={inputChange}/>

				</Paper>
			</div>
    )
  }
}

// const { client } = this.props;
// NOTE: Use in Profile, not here
AccountForm.defaultProps = {
	classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
}

AccountForm.propTypes = {
  handleChange: (event) => {console.log(event)},
}

export default withStyles(styles)(AccountForm)
