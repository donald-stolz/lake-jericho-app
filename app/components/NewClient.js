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
		maxHeight: 750,
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
        and sets page to add another account
    */
		this.setState({
			step: 2,
			numAcc: (this.state.numAcc + 1)
		})
  }
	submitClient(){
		console.log(this.state.client);
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
  //Steps for dispalying form
    var {step} = this.state
		const personalChange = this.updatePersonal.bind(this)
		const financialChange = this.updateFinancial.bind(this)
		const accountChange = this.updateAccount.bind(this)
		const performanceChange = this.updatePerformance.bind(this)

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
						<Button
								size="large"
								variant="raised"
								color="primary"
								className={classes.button}
								onClick={this.nextStep.bind(this)}>
							Next
						</Button>
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
		// Empty Personal Information
		personal: PropTypes.shape({
			name: PropTypes.string,
			dob: PropTypes.string,
			address: PropTypes.string,
			phone: PropTypes.string,
			email: PropTypes.string,
		}),

		// Empty Financial Information
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
			returnObjective: PropTypes.string,
			riskAbility: PropTypes.string,
			riskWillingness: PropTypes.string,
			riskOverall: PropTypes.string
		}),

		// Empty Account(s) Information
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
		// Empty Personal Information
		personal: {
			name: ' ',
			dob: ' ',
			address: ' ',
			phone: ' ',
			email: ' ',
		},

		// Empty Financial Information
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
			returnObjective: ' ',
			riskAbility: ' ',
			riskWillingness: ' ',
			riskOverall: ' '
		},

		// Empty Account(s) Information
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
}
export default withStyles(styles)(NewClient);
