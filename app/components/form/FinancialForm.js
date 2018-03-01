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
    maxWidth: 400
  }
});

class FinancialForm extends Component {
// TODO: Button Events

  render(){
		const { classes } = this.props;
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
						<LabeledInput value={annualIncome} label={"Annual Income"} id={'annualIncome'} onChange={inputChange} startAdornment={"$"} />
						<LabeledInput value={totalAssets} label={"Total Assets"} id={'totalAssets'} onChange={inputChange} startAdornment={"$"} />
						<LabeledInput value={liquidAssets} label={"Liquid Assets"} id={'liquidAssets'} onChange={inputChange} startAdornment={"$"} />
						<LabeledInput value={investmentAssets} label={"Investment Assets"} id={'investmentAssets'} onChange={inputChange} startAdornment={"$"} />
						<LabeledInput value={investmentExperience} label={"Investment Experience"} id={'investmentExperience'} onChange={inputChange} />
						<LabeledInput value={overallObjectives} label={"Overall Objectives"} id={'overallObjectives'} onChange={inputChange} />
						<LabeledInput value={timeHorizon} label={"Time Horizon"} id={'timeHorizon'} onChange={inputChange} />
						<LabeledInput value={taxConsids} label={"Tax Considerations"} id={'taxConsids'} onChange={inputChange} />
						<LabeledInput value={liquidConsids} label={"Liquid Considerations"} id={'liquidConsids'} onChange={inputChange} />
						<LabeledInput value={regulatoryIssues} label={"Regulatory Issues"} id={'regulatoryIssues'} onChange={inputChange} />
						<LabeledInput value={unique} label={"Unique"} id={'unique'} onChange={inputChange} />
						<LabeledInput value={returnObjectives} label={"Return Objectives"} id={'returnObjectives'} onChange={inputChange} />
						<LabeledInput value={riskAbility} label={"Ability"} id={'riskAbility'} onChange={inputChange} />
						<LabeledInput value={riskWillingness} label={"Willingness"} id={'riskWillingness'} onChange={inputChange} />
						<LabeledInput value={riskOverallAbility} label={"Overall"} id={'riskOverallAbility'} onChange={inputChange} />
					</List>
				</Paper>
			</div>
    )
  }
}

// const { client } = this.props;
// NOTE: Use in Profile, not here
FinancialForm.defaultProps = {
	classes: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	client: PropTypes.shape({
		annualIncome: PropTypes.string.isRequired,
		totalAssets: PropTypes.string.isRequired,
		liquidAssets: PropTypes.string.isRequired,
		investmentAssets: PropTypes.string.isRequired,
		investmentExperience: PropTypes.string.isRequired,
		investmentObjectives: PropTypes.string.isRequired,
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


FinancialForm.propTypes = {
	handleChange: (event) => {console.log(event);},
	client:{
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
}

export default withStyles(styles)(FinancialForm)
