import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import List from 'material-ui/List';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Input from 'material-ui/Input';
import AccountInfo from './AccountInfo'
import AddIcon from 'material-ui-icons/Add';
import PerformanceInfo from './PerformanceInfo'
import {CLIENT_STRUCT} from '../../constants/constants'

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
		maxWidth: 500
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
	button: {
		float: 'right'
	}
});

class AccountSection extends Component {
  constructor(props){
    super(props)

    this.state = {
			viewState: "view",
			active: 0,
			accounts: this.props.accounts
		}
  }

	changeAccount = (event, active) => {
		this.setState({ active });
		this.forceUpdate();
	};

	updateAccount(account){
		var {active, accounts} = this.state;
		accounts[active] = account;
		this.setState({accounts})
		this.save();
	}

	updatePerformance(performance){
		var {active, accounts} = this.state;
		var newAcc = accounts[active];
		newAcc = {...newAcc, performanceHist : performance}
		accounts[active] = newAcc;
		this.setState({accounts});
		this.save();
	}

	setEdit(){ this.setState({viewState : "edit"}); }

	setAdd(){
		var {accounts} = this.state
		var nextNum = accounts.length; // NOTE: Is length -1
		var newAccount = CLIENT_STRUCT.accounts[0]
		newAccount.accNum = nextNum;

		accounts.push(newAccount)
		this.setState({
			accounts	: accounts,
			active		: nextNum,
			viewState : "add"});
	}

	cancel(){
		var {accounts, active, viewState} = this.state
		if (viewState === "new") {
			active = active - 1;
			accounts.pop();
		}
		this.setState({
			accounts	: accounts,
			viewState : "view",
			active		: active});
	 }

	save(){
		this.props.handleChange(this.state.accounts);
		this.setState({viewState : "view"});
	}

	addAcc(){ this.setState({viewState : "add"}); }

	renderPerformance(){
		const { classes, accounts } = this.props;
		const { viewState, active } = this.state;
		const updatePerformance = this.updatePerformance.bind(this)

		if (viewState === "view") {
			console.log(active);
			console.log(accounts[active].performanceHist);
			return (
				<PerformanceInfo
					performance={accounts[active].performanceHist}
					handleChange={updatePerformance}/>
			);
		}
		return null;
	}

  render(){
		const { classes, accounts } = this.props;
		const { viewState, active } = this.state;
		const tabs = accounts.map((account, index) => <Tab key={index} label={account.accName} />)
		const onAddClick = this.setAdd.bind(this);
		const onEditClick = this.setEdit.bind(this);
		const onTabClick = this.changeAccount.bind(this);
		const updateAccount = this.updateAccount.bind(this)
		const cancel = this.cancel.bind(this)
		const updatePerformance = this.updatePerformance.bind(this)

		return(
			<div className={classes.root}>
				<Paper className={classes.container} elevation={6}>
					<AppBar className={classes.container} position="static" color="primary" >
						<Toolbar>
							<Typography variant="title" color="inherit" className={classes.flex}>
								Account Information
							</Typography>
							<Button color="inherit"
								onClick={onEditClick}>
								Edit
							</Button>
						</Toolbar>
					</AppBar>
					<AppBar position="static" color="default" >
						<Toolbar>
						<Tabs value={active} onChange={onTabClick} className={classes.flex}>
							{tabs}
						</Tabs>
						<Button color="primary" variant="fab"
							onClick={onAddClick}>
							<AddIcon size={"small"}/>
						</Button>
						</Toolbar>
					</AppBar>
					<AccountInfo
						account={accounts[active]}
						viewState={viewState}
						handleChange={updateAccount}
						cancel={cancel}
						/>
					{this.renderPerformance()}

			</Paper>

		</div>
	)
	}
}

AccountSection.propTypes = {
	classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
	accounts : PropTypes.arrayOf(PropTypes.shape({
		accNum: PropTypes.number,
		accName: PropTypes.string,
		startBal: PropTypes.string,
		startDate: PropTypes.string,
		tax: PropTypes.string,
		horizon: PropTypes.string,
		bias: PropTypes.string,
		performanceHist : PropTypes.arrayOf(PropTypes.shape({
			date: PropTypes.string,
			tax: PropTypes.string,
			horizon: PropTypes.string,
			bias: PropTypes.string,
			beginBal: PropTypes.string,
			endBal: PropTypes.string,
			netReturn: PropTypes.string
		}))
	})).isRequired
}


AccountSection.defaultProps = {
	handleChange: (event) => {console.log(event)},
	accounts : [{
		accNum: 0,
		accName: ' ',
		startBal: ' ',
		startDate: ' ',
		tax: ' ',
		horizon: ' ',
		bias: ' ',
		performanceHist : [{
			date: ' ',
			tax: ' ',
			horizon: ' ',
			bias: ' ',
			beginBal: ' ',
			endBal: ' ',
			netReturn: ' '
		}]
	}]
}

export default withStyles(styles)(AccountSection)
