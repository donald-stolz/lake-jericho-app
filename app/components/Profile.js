import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { LinearProgress } from 'material-ui/Progress';
import List from 'material-ui/List';
import PersonalInfo from './profile/PersonalInfo';
import FinancialInfo  from './profile/FinancialInfo';

const styles = theme => ({
  root: {
		flex: 1,
		maxHeight: 800,
		overflow: 'auto'
  },
  section: {
    marginBottom: 15
  },
	list:{
		padding: theme.spacing.unit * 2,
	}
})

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = { loading : true }

		this.props.get(this.props.match.params.id)
  }

	componentWillReceiveProps(nextProps){
		if (this.state.loading) {
			var newState = {
				client: nextProps.client,
				loading: false
			}
			this.setState(newState);
		}
	}

  // Methods for changing states in order to remove a client

  render(){
		const {classes} = this.props;
		// TODO: Center Spinner
		if (this.state.loading) {
			return (
				<div>
					<LinearProgress size={100} />
				</div>
			);
		}
		else {
			const {client} = this.props
			return(
				<div className={classes.root}>
				<List component="nav" className={classes.list}>
        	<PersonalInfo client={client.personal} className={classes.section}/>
					<FinancialInfo client={client.financial} className={classes.section}/>
				</List>
				</div>
		)
		}
	}
}

Profile.propTypes = {
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
			accNum: PropTypes.string,
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

Profile.defaultProps = {
	client : {
		// Empty Personal Information
		personal: {
			name: 'null',
			dob: 'null',
			address: 'null',
			phone: 'null',
			email: 'null',
		},

		// Empty Financial Information
		financial:{
			annualIncome: 0,
			totalAssets: 0,
			liquidAssets: 0,
			investmentAssets: 0,
			investmentExperience: 'null',
			investmentObjectives: 'null',
			timeHorizon: 'null',
			taxConsids: 'null',
			liquidConsids: 'null',
			regulatoryIssues: 'null',
			unique: 'null',
			returnObjective: 'null',
			riskAbility: 'null',
			riskWillingness: 'null',
			riskOverall: 'null'
		},

		// Empty Account(s) Information
		accounts : [{
			accNum: 0,
			accName: 'null',
			startBal: 'null',
			startDate: 'null',
			tax: 'null',
			horizon: 'null',
			bias: 'null',
			performanceHist : [{
				date: 'null',
				tax: 'null',
				horizon: 'null',
				bias: 'null',
				beginBal: 0,
				endBal: 0,
				netReturn: 0
			}]
		}]
	}
}

export default withStyles(styles)(Profile);
