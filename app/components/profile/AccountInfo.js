import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List';
import PerformanceForm from '../form/PerformanceForm'
import TextField from 'material-ui/TextField';
import Input from 'material-ui/Input';


const styles = theme => ({
  root: {
		flex: 1,
  },
	flex: {
    flex: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
		width: '100%',

  },
  list:{
		paddingLeft: theme.spacing.unit * 2,
		minWidth: 300,
		maxWidth: 400
	},
	textField: {
		margin: theme.spacing.unit,
		paddingBottom: 2,
		flexWrap: 'wrap',
		width: '100%',
	},
	buttonBar: {
		paddingTop: 5,
		paddingBottom: 10
	},
});

class AccountInfo extends Component {

  render(){
		const { classes, account } = this.props;

		return(
			<div>
				<List component="nav" className={classes.list}>
					<TextField disabled value={account.accName} label="Account Name" disabled className={classes.textField}/>
					<TextField disabled value={account.startDate} label="Start Date" disabled className={classes.textField}/>
					<TextField disabled value={account.startBal} label="Start Balance" disabled className={classes.textField}/>
					<TextField disabled value={account.tax} label="Tax"disabled className={classes.textField}/>
					<TextField disabled value={account.horizon} label="Horizon" disabled className={classes.textField}/>
					<TextField disabled value={account.bias} label="Bias" disabled className={classes.textField}/>
				</List>
		  </div>
	)
	}
}

AccountInfo.propTypes = {
	classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
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


AccountInfo.defaultProps = {
	handleChange: (event) => {console.log(event)},
	account : {
		accNum: '0',
		accName: ' ',
		startBal: ' ',
		startDate: ' ',
		tax: ' ',
		horizon: ' ',
		bias: ' ',
	},}

export default withStyles(styles)(AccountInfo)
