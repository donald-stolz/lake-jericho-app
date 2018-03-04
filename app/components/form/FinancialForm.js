import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import LabeledInput from '../common/LabeledInput';
// import Grid from 'material-ui/Grid';
// import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
		flex: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
		width: '100%'
  },
  buttonBar: {
    paddingTop: 20,
    paddingBottom: 10
  },
  list:{
    paddingLeft: theme.spacing.unit * 2,
    minWidth: 300,
    maxWidth: 500
  }
});

class FinancialForm extends Component {
// TODO: Button Events

  render(){
		const { classes, client } = this.props;
		const inputChange = this.props.handleChange.bind(this)

    return(
			<div className={classes.root}>
  			<Paper className={classes.container} elevation={6}>
          <AppBar className={classes.container} position="static" color="primary" >
  			    <Toolbar>
  			      <Typography variant="title" color="inherit">
  			        Financial Information
  			      </Typography>
  			    </Toolbar>
  			  </AppBar>
					<List component="nav" className={classes.list}>
						<LabeledInput value={client.annualIncome} label={"Annual Income"} id={'annualIncome'} handleChange={inputChange} startadornment={"$"} />
						<LabeledInput value={client.totalAssets} label={"Total Assets"} id={'totalAssets'} handleChange={inputChange} startadornment={"$"} />
						<LabeledInput value={client.liquidAssets} label={"Liquid Assets"} id={'liquidAssets'} handleChange={inputChange} startadornment={"$"} />
						<LabeledInput value={client.investmentAssets} label={"Investment Assets"} id={'investmentAssets'} handleChange={inputChange} startadornment={"$"} />
						<LabeledInput value={client.investmentExperience} label={"Investment Experience"} id={'investmentExperience'} handleChange={inputChange} />
						<LabeledInput value={client.overallObjectives} label={"Overall Objectives"} id={'overallObjectives'} handleChange={inputChange} />
						<LabeledInput value={client.timeHorizon} label={"Time Horizon"} id={'timeHorizon'} handleChange={inputChange} />
						<LabeledInput value={client.taxConsids} label={"Tax Considerations"} id={'taxConsids'} handleChange={inputChange} />
						<LabeledInput value={client.liquidConsids} label={"Liquid Considerations"} id={'liquidConsids'} handleChange={inputChange} />
						<LabeledInput value={client.regulatoryIssues} label={"Regulatory Issues"} id={'regulatoryIssues'} handleChange={inputChange} />
						<LabeledInput value={client.unique} label={"Unique"} id={'unique'} handleChange={inputChange} />
						<LabeledInput value={client.returnObjectives} label={"Return Objectives"} id={'returnObjectives'} handleChange={inputChange} />
						<LabeledInput value={client.riskAbility} label={"Ability"} id={'riskAbility'} handleChange={inputChange} />
						<LabeledInput value={client.riskWillingness} label={"Willingness"} id={'riskWillingness'} handleChange={inputChange} />
						<LabeledInput value={client.riskOverallAbility} label={"Overall"} id={'riskOverallAbility'} handleChange={inputChange} />
					</List>
				</Paper>
			</div>
    )
  }
}

// const { client } = this.props;
// NOTE: Use in Profile, not here
FinancialForm.propTypes = {
	classes: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	client: PropTypes.shape({
		annualIncome: PropTypes.string.isRequired,
		totalAssets: PropTypes.string.isRequired,
		liquidAssets: PropTypes.string.isRequired,
		investmentAssets: PropTypes.string.isRequired,
		investmentExperience: PropTypes.string.isRequired,
		overallObjectives: PropTypes.string.isRequired,
		timeHorizon: PropTypes.string.isRequired,
		taxConsids: PropTypes.string.isRequired,
		liquidConsids: PropTypes.string.isRequired,
		regulatoryIssues: PropTypes.string.isRequired,
		unique: PropTypes.string.isRequired,
		returnObjective: PropTypes.string.isRequired,
		riskAbility: PropTypes.string.isRequired,
		riskWillingness: PropTypes.string.isRequired,
		riskOverall: PropTypes.string.isRequired
	}).isRequired
}


FinancialForm.defaultProps = {
	handleChange: (event) => {console.log(event);},
	client:{
		annualIncome: ' ',
		totalAssets: ' ',
		liquidAssets: ' ',
		investmentAssets: ' ',
		investmentExperience: ' ',
		overallObjectives: ' ',
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
}

export default withStyles(styles)(FinancialForm)
