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
import AccountForm from '../form/AccountForm'
import TextField from 'material-ui/TextField';
import Input from 'material-ui/Input';
import AccountInfo from './AccountInfo'
import AddIcon from 'material-ui-icons/Add';
import PerformanceInfo from './PerformanceInfo'



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

	changeAccount = (event, active) => { this.setState({ active });};

	handleEditAcc(event){
		const {active} = this.state;
		var newAcc = this.state.accounts[active];
		newAcc = {...newAcc, [event.id] : event.value};
		var updateAccounts = this.state.accounts;
		updateAccounts[active] = newAcc;

		this.setState({accounts: updateAccounts})
	}



	handleNewAcc(event){
		const propLength = this.props.accounts.length;
		var updateAccounts = this.state.accounts;
		if (propLength === updateAccounts.length) {
			var addNew = {accNum: propLength};
			updateAccounts.push(addNew);
		}
		var index = propLength + 1;
		var newAcc = this.state.accounts[index];
		newAcc = {...newAcc, [event.id] : event.value};
		updateAccounts[index] = newAcc;

		this.setState({accounts: updateAccounts})
	}

	handlePerformance(performance){
		var {active, accounts} = this.state;
		var newAcc = accounts[active];
		newAcc = {...newAcc, performanceHist : performance}
		accounts[active] = newAcc;
		this.setState({accounts});
		this.save();
	}

	setEdit(){ this.setState({viewState : "edit"}); }

	setAdd(){ this.setState({viewState : "add"}); }

	cancel(){ this.setState({viewState : "view"}); }

	save(){
		this.props.handleChange(this.state.accounts);
		this.setState({viewState : "view"});
	}

	addAcc(){ this.setState({viewState : "add"}); }

	renderViewOrEdit(){
		const { viewState, active } = this.state;
		const	{classes, accounts} = this.props;
		const handlePerformance = this.handlePerformance.bind(this)
		const handleNewAcc = this.handleNewAcc.bind(this)
		const handleEditAcc = this.handleEditAcc.bind(this)


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

		// NOTE: Would ife provide better performance
		switch (viewState) {
			case "view":
				return (
					<div>
						<AccountInfo account={accounts[active]}/>
						<PerformanceInfo
							performance={accounts[active].performanceHist}
							handleChange={handlePerformance}/>
					</div>
);
				break;
			case "add":
				return(
					<div>
						<AccountForm
							accountChange={handleNewAcc}
							newAccount={true}
							performanceChange={handlePerformance}/>
						{buttons}
					</div>)
				break;
			default:
				return (
					<div>
						<AccountForm
							account={accounts[active]}
							newAccount={false}
							accountChange={handleEditAcc}/>
						{buttons}
					</div>
				);
		}
	}

  render(){
		const { classes, accounts } = this.props;
		const { viewing, active } = this.state;
		const tabs = accounts.map((account, index) => <Tab key={index} label={account.accName} />)
		const onAddClick = this.setAdd.bind(this);
		const onEditClick = this.setEdit.bind(this);
		const onTabClick = this.changeAccount.bind(this);

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
					{this.renderViewOrEdit()}
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
