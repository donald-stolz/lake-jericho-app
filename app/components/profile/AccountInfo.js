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
	constructor(props){
		super(props);
		// this.state = {}
	}

	handleChange(){

	}

	save(){
		// TODO: Push account/update current

		this.props.handleChange(account)
	}

  render(){
		const { classes, account, viewState } = this.props;

		if (viewState === 'add') {
			return(
				<div>
					<AccountForm
						accountChange={handleNewAcc}
						newAccount={true}
						performanceChange={updatePerformance}/>
					{buttons}
				</div>)
		} else if (viewState === 'edit') {
			return(
				<div>
					<AccountForm
						account={accounts[active]}
						newAccount={false}
						accountChange={handleEditAcc}/>
					{buttons}
				</div>)
		} else {
			return(
				<div>
					<List component="nav" className={classes.list}>
						<TextField disabled value={account.accName} label="Account Name" disabled className={classes.textField}/>
						<TextField disabled value={account.startDate} label="Start Date" disabled className={classes.textField}/>
						<TextField disabled value={"$" + account.startBal} label="Start Balance" disabled className={classes.textField}/>
						<TextField disabled value={account.tax} label="Tax"disabled className={classes.textField}/>
						<TextField disabled value={account.horizon} label="Horizon" disabled className={classes.textField}/>
						<TextField disabled value={account.bias} label="Bias" disabled className={classes.textField}/>
					</List>
				</div>)
		}
	}
}

AccountInfo.propTypes = {
	classes: PropTypes.object.isRequired,
	viewState: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
	account : propTypes.arrayOf(PropTypes.shape({
		accNum: PropTypes.number.isRequired,
		accName: PropTypes.string.isRequired,
		startBal: PropTypes.string.isRequired,
		startDate: PropTypes.string.isRequired,
		tax: PropTypes.string.isRequired,
		horizon: PropTypes.string.isRequired,
		bias: PropTypes.string.isRequired,
	})).isRequired
}


AccountInfo.defaultProps = {
	viewState: 'view'
	handleChange: (event) => {console.log(event)},
	account : [{
		accNum: 0,
		accName: ' ',
		startBal: ' ',
		startDate: ' ',
		tax: ' ',
		horizon: ' ',
		bias: ' ',
	}],
}

export default withStyles(styles)(AccountInfo)
