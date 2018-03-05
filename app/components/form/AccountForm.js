import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List';
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
	list:{
		paddingLeft: theme.spacing.unit * 2,
		minWidth: 300,
		maxWidth: 500
	},
  buttonBar: {
    paddingTop: 5,
    paddingBottom: 10
  }
});

class AccountForm extends Component {

	constructor(props){
		super(props);
		this.state={newAccount : this.props.newAccount}
	}

	renderPerformance(){
		if (this.props.newAccount) {
			return (<PerformanceForm handleChange={this.props.performanceChange.bind(this)}/>);
		}
	}

  render(){
		const { classes, account } = this.props;
		const inputChange = this.props.accountChange.bind(this)

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
					<List component="nav" className={classes.list}>
						<LabeledInput label={"Account Name"} value={account.accName} id={'accName'} handleChange={inputChange} />
						<DatePicker 	label={"Start Date"} value={account.startDate} id={'startDate'} handleChange={inputChange} />
						<LabeledInput label={"Start Balance"} value={account.startBal} id={'startBal'} handleChange={inputChange} startadornment={"$"}/>
						<SimpleSelect label={"Tax"} value={account.tax} id={'tax'} menu={TAX_MENU} handleChange={inputChange}/>
						<SimpleSelect label={"Horizon"} value={account.horizon} id={'horizon'} menu={HORIZON_MENU} handleChange={inputChange}/>
						<SimpleSelect label={"Bias"} value={account.bias} id={'bias'} menu={BIAS_MENU} handleChange={inputChange}/>
					</List>
				</Paper>
				{this.renderPerformance()}
			</div>
    )
  }
}

// const { client } = this.props;
// NOTE: Use in Profile, not here
AccountForm.propTypes = {
	classes: PropTypes.object.isRequired,
  accountChange: PropTypes.func.isRequired,
	performanceChange: PropTypes.func.isRequired,
	newAccount: PropTypes.bool.isRequired,
	account : PropTypes.shape({
		accNum: PropTypes.string.isRequired,
		accName: PropTypes.string.isRequired,
		startBal: PropTypes.string.isRequired,
		startDate: PropTypes.string.isRequired,
		tax: PropTypes.string.isRequired,
		horizon: PropTypes.string.isRequired,
		bias: PropTypes.string.isRequired,
	}).isRequired
}

AccountForm.defaultProps = {
	accountChange: (event) => {console.log(event)},
	performancChange: (event) => {console.log(event)},
	newAccount: true,
	account : {
		accNum: '0',
		accName: ' ',
		startBal: ' ',
		startDate: ' ',
		tax: ' ',
		horizon: ' ',
		bias: ' ',
	},
}

export default withStyles(styles)(AccountForm)
