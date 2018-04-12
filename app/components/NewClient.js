import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PersonalForm  from './form/PersonalForm'
import FinancialForm  from './form/FinancialForm'
import AccountForm  from './form/AccountForm'
import Confirmation from './form/Confirmation'

import { CLIENT_STRUCT } from '../constants/constants'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
		flex: 1,
		height: '100vh',
		overflow: 'auto'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  buttonBar: {
    paddingTop: 5,
    paddingBottom: 10
  },
});

class NewClient extends Component {
  constructor(props) {
    super(props)

    this.state = {
			numAcc : 0,
			step : 0,
			client : this.props.client
		}
  }

	nextStep(){
		var nextStep = this.state.step + 1;
		this.setState({step :nextStep});
	}

  addAccount(){
    /* Optional Step: Increments number of accounts
        and sets page to add another account */
		this.setState({
			step: 2,
			numAcc: (this.state.numAcc + 1)
		})
  }
	submitClient(){
		this.props.add(this.state.client)
	}

	updatePersonal(event){
		var newPersonal = {...this.state.client.personal, [event.id] : event.value};
		var newClient = {...this.state.client, personal: newPersonal};
		this.setState({client:newClient});
	}

	updateFinancial(event){
		var newFinancial = {...this.state.client.financial, [event.id] : event.value};
		var newClient = {...this.state.client, financial: newFinancial};
		this.setState({client:newClient});
	}

	updateAccount(event){
		const index = this.state.numAcc;
		var newAcc = this.state.client.accounts[index];
		newAcc = {...newAcc, [event.id] : event.value};
		var updateAccounts = this.state.client.accounts;
		updateAccounts[index] = newAcc;
		var newClient = { ...this.state.client, accounts: updateAccounts};
		this.setState({client: newClient})
	}

	updatePerformance(event){
		const index = this.state.numAcc;
		var acc = this.state.client.accounts[index]
		acc.performanceHist[0] = {...acc.performanceHist[0], [event.id] : event.value};
		var updateAccounts = this.state.client.accounts;
		updateAccounts[index] = acc;
		var newClient = { ...this.state.client, accounts: updateAccounts};
		this.setState({client: newClient})
	}

  formStep(){
    var {step} = this.state
		const personalChange = this.updatePersonal.bind(this)
		const financialChange = this.updateFinancial.bind(this)
		const accountChange = this.updateAccount.bind(this)
		const performanceChange = this.updatePerformance.bind(this)

		//Steps for dispalying form
    switch (step) {
      case 0:
        // Step 1: Displays personal fields
        return < PersonalForm handleChange={personalChange}/>
      case 1:
        // Step 2: Displays general financial fields
        return < FinancialForm handleChange={financialChange}/>
      case 2:
        // Step 3: Displays the add account fields; Final mandatory step
        return < AccountForm accountChange={accountChange} performanceChange={performanceChange}/>
      case 3:
        // Step 4: Allows user to choose between adding another account or finishing
        // Client will be saved to DB if user cancels on additional account(s)
        return < Confirmation
					handleAccount={this.addAccount.bind(this)}
					handleSubmit={this.submitClient.bind(this)}/>
      default:
        return null
    }
  }

	// Button is rendered as disabled until all data contains values
	// TODO Implement proper verification for each input item
	disableButton(){
		const { classes } = this.props;
		const {step, client} = this.state
		const readyBtn = (
			<Button
					size="large"
					variant="raised"
					color="primary"
					className={classes.button}
					onClick={this.nextStep.bind(this)}>
				Next
			</Button>
		)
		const disabledBtn = (
			<Button
					size="large"
					variant="raised"
					color="primary"
					className={classes.button}
					disabled>
				Next
			</Button>
		)

		const checkFields = (obj) => Object.values(obj).every(x => x!== ' ');

		switch (step) {
      case 0:
        // Step 1: Displays personal fields
				if (checkFields(client.personal)) { return readyBtn; }
				break;
      case 1:
        // Step 2: Displays general financial fields
				if (checkFields(client.financial)) { return readyBtn; }
				break;
      case 2:
        // Step 3: Displays the add account fields; Final mandatory step
				console.log(client.accounts);
				if (checkFields(client.accounts[0])) {
					if (checkFields(client.accounts[0].performanceHist[0])) {return readyBtn; }
				}
				break;
			default:
				return disabledBtn;
		}
		return disabledBtn;
	}

	formButtons(){
		const { classes } = this.props;

		if (this.state.step < 3) {
			return(
				<Grid container className={classes.buttonBar} justify={'space-around'}>
					<Grid item>
						<Button component={Link} to="/"
								size="large"
								variant="raised"
								color="secondary"
								className={classes.button}>
							Cancel
						</Button>
					</Grid>
					<Grid item>
						{this.disableButton()}
					</Grid>
				</Grid>)
		}
	}

  render(){
		const { classes } = this.props;

    return(
      <div className={classes.root}>
        {this.formStep()}
				{this.formButtons()}
      </div>
    )
  }
}

NewClient.defaultProps = {
	classes: PropTypes.object.isRequired,
	client: PropTypes.shape({
		personal: PropTypes.shape({
			name: PropTypes.string,
			dob: PropTypes.string,
			address: PropTypes.string,
			phone: PropTypes.string,
			email: PropTypes.string,
		}),

		financial: PropTypes.shape({
			annualIncome: PropTypes.string,
			totalAssets: PropTypes.string,
			liquidAssets: PropTypes.string,
			investmentAssets: PropTypes.string,
			investmentExperience: PropTypes.string,
			investmentObjectives: PropTypes.string,
			timeHorizon: PropTypes.string,
			taxConsids: PropTypes.string,
			liquidConsids: PropTypes.string,
			regulatoryIssues: PropTypes.string,
			unique: PropTypes.string,
			returnObjectives: PropTypes.string,
			riskAbility: PropTypes.string,
			riskWillingness: PropTypes.string,
			riskOverall: PropTypes.string
		}),

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
		}))
	}).isRequired
}
NewClient.defaultProps = {
	client : {
		personal: {
			name: ' ',
			dob: ' ',
			address: ' ',
			phone: ' ',
			email: ' ',
		},

		financial:{
			annualIncome: ' ',
			totalAssets: ' ',
			liquidAssets: ' ',
			investmentAssets: ' ',
			investmentExperience: ' ',
			investmentObjectives: ' ',
			timeHorizon: ' ',
			taxConsids: ' ',
			liquidConsids: ' ',
			regulatoryIssues: ' ',
			unique: ' ',
			returnObjectives: ' ',
			riskAbility: ' ',
			riskWillingness: ' ',
			riskOverall: ' '
		},

		accounts : [{
			accNum: 0,
			accName: ' ',
			startBal: ' ',
			startDate: ' ',
			tax: ' ',
			horizon: ' ',
			bias: ' ',
			performanceHist : [{
				date: '01/14',
				tax: ' ',
				horizon: ' ',
				bias: ' ',
				beginBal: ' ',
				endBal: ' ',
				netReturn: ' '
			}]
		}]
	}
}
export default withStyles(styles)(NewClient);
