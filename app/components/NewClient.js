import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PersonalForm  from './form/PersonalForm'
import FinancialForm  from './form/FinancialForm'
import AccountForm  from './form/AccountForm'

import { CLIENT_STRUCT } from '../constants/constants'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
		flex: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  buttonBar: {
    paddingTop: 5,
    paddingBottom: 10
  }
});

class NewClient extends Component {
  constructor() {
    super()

    this.state = {
			numAccounts : 0,
			step : 0,
			CLIENT_STRUCT
		}
  }

	nextStep(){
		var nextStep = this.state.step + 1;
		this.setState({step :nextStep})
	}

  addAccount(){
    /* Optional Step: Increments number of accounts
        and sets page to add another account
    */
  }

	update(event){
		this.setState({
			[event.target.id]: event.target
		})
	}

	updateAccount(account){
		// NOTE: assing accNUm
		var numAcc = this.state.numAccounts++
		if (this.state.numAccounts === 0) {
			this.setState({accounts: account, numAccounts: numAcc})
		}
		else {
			var updated = accounts.push(account)
			this.setState({accounts: updated, numAccounts: numAcc})
		}

	}

  formStep(){
  //Steps for dispalying form
    var step = this.state.step
		const handleChange = this.update.bind(this)

    switch (step) {
      case 0:
        // Step 1: Displays personal fields
        return < PersonalForm handleChange={handleChange}/>
      case 1:
        // Step 2: Displays general financial fields
        return < FinancialForm handleChange={handleChange}/>
      case 2:
        // Step 3: Displays the add account fields; Final mandatory step
        return < AccountForm updateAccount={this.updateAccount.bind(this)}/>
      case 3:
        // Step 4: Allows user to choose between adding another account or finishing
        // Client will be saved to DB if user cancels on additional account(s)
        return < Continue addAcc={this.addAccount.bind(this)}/>
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
}

export default withStyles(styles)(NewClient);
