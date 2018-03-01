import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List from 'material-ui/List';
import TextField from 'material-ui/TextField';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
		width: '100%',

  },
  list:{
		paddingLeft: theme.spacing.unit * 2,
		minWidth: 300,
		maxWidth: 500
	},
	textField: {
		margin: theme.spacing.unit,
		paddingBottom: 2,
		flexWrap: 'wrap',
		width: '100%',
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
		accNum: PropTypes.number.isRequired,
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
		accNum: 0,
		accName: ' ',
		startBal: ' ',
		startDate: ' ',
		tax: ' ',
		horizon: ' ',
		bias: ' ',
	},}

export default withStyles(styles)(AccountInfo)
