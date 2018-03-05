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
			value: 0}
  }

	changeAccount = (event, value) => {
		console.log(value);
    this.setState({ value });
  };

// TODO: Button Events
	handleChange = target => {
		this.props.handleChange(target);
	};

	edit(){
		this.setState({viewState : "edit"});
	}

	cancel(){
		this.setState({viewState : "view"});
	}

	save(){
		console.log("Save");
	}

	addAcc(){
		this.setState({viewState : "add"});
	}

	renderViewOrEdit(){
		const { viewState, value } = this.state;
		const	{classes, accounts } = this.props;
		const inputChange = this.handleChange.bind(this);
		const account = this.props.accounts[value]
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

		switch (viewState) {
			case "view":
				return (
					<div>
						< AccountInfo account={account}/>
						<PerformanceInfo performance={accounts[value].performanceHist}/>
					</div>
);
				break;
			case "add":
				return(
					<div>
						<AccountForm account={account} />
						{buttons}
					</div>)
				break;
			default:
				return (
					<div>
						<AccountForm account={account} newAccount={false} handleChange={inputChange}/>
						{buttons}
					</div>
				);
		}
	}

  render(){
		const { classes, accounts } = this.props;
		const { viewing, value } = this.state;
		const tabs = accounts.map((account, index) => <Tab key={index} label={account.accName} />)

		return(
			<div className={classes.root}>
				<Paper className={classes.container} elevation={6}>
					<AppBar className={classes.container} position="static" color="primary" >
						<Toolbar>
							<Typography variant="title" color="inherit" className={classes.flex}>
								Account Information
							</Typography>
							<Button color="inherit"
								onClick={this.edit.bind(this)}>
								Edit
							</Button>
						</Toolbar>
					</AppBar>
					<AppBar position="static" color="default" >
						<Toolbar>
						<Tabs value={value} onChange={this.changeAccount} className={classes.flex}>
							{tabs}
						</Tabs>
						<Button color="primary" variant="fab"
							onClick={this.addAcc.bind(this)}>
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
// <PerformanceInfo records={accounts[value].performanceHist}


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
