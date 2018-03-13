import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import AccountForm from '../form/AccountForm'


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
		const {account} = this.props;
		this.state = {account}
	}

	handleChange = target => {
		var account = {...this.state.account, [target.id]:target.value}
		this.setState({account})
	};
// TODO: Fix performance updater
	updatePerformance = target =>{
		console.log(target);
		var {account} = this.state
		account.performanceHist[0] = {...account.performanceHist[0], [target.id] : target.value};
		this.setState({account})
	}

	save(){
		const {account} = this.state;
		console.log(account);
		this.props.handleChange(account)
	}

// NOTE: Needs propTypes
	cancel(){this.props.cancel()}

  render(){
		const { classes, account, viewState } = this.props;
		const updatePerformance = this.updatePerformance.bind(this)
		const handleChange = this.handleChange.bind(this)
		// NOTE: Should export and re-use in form
		const buttons = (
			<Grid container className={classes.buttonBar} justify={'space-around'}>
				<Grid item>
					<Button
							onClick={this.cancel.bind(this)}
							size="large"
							variant="raised"
							color="secondary"
							className={classes.button}>
						Cancel
					</Button>
				</Grid>
				<Grid item>
					<Button
							onClick={this.save.bind(this)}
							size="large"
							variant="raised"
							color="primary"
							className={classes.button}
							>
						Save
					</Button>
				 </Grid>
			</Grid>
		)

		if (viewState === 'add') {
			return(
				<div>
					<AccountForm
						accountChange={handleChange}
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
						accountChange={handleChange}/>
					{buttons}
				</div>)
		} else {
			return(
				<div>
					<List component="nav" className={classes.list}>
						<TextField disabled value={account.accName} label="Account Name" disabled className={classes.textField}/>
						<TextField disabled value={account.date} label="Start Date" disabled className={classes.textField}/>
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
	account : PropTypes.shape({
		accNum: PropTypes.number.isRequired,
		accName: PropTypes.string.isRequired,
		startBal: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		tax: PropTypes.string.isRequired,
		horizon: PropTypes.string.isRequired,
		bias: PropTypes.string.isRequired,
	}).isRequired
}


AccountInfo.defaultProps = {
	viewState: 'view',
	handleChange: (event) => {console.log(event)},
	account : {
		accNum: 0,
		accName: ' ',
		startBal: ' ',
		date: ' ',
		tax: ' ',
		horizon: ' ',
		bias: ' ',
	},
}

export default withStyles(styles)(AccountInfo)
