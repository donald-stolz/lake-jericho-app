import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import LabeledInput from '../common/LabeledInput';
import Grid from 'material-ui/Grid';

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

class FinancialForm extends Component {
// TODO: Button Events

	handleChange(event){
		// TODO: Should pass to parent
	}

  render(){
		const { classes } = this.props;
		const inputChange = this.handleChange.bind(this)

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
					<LabeledInput label={"Annual Income"} id={'annualIncome'} onChange={inputChange} startAdornment={"$"} />
					<LabeledInput label={"Total Assets"} id={'totalAssets'} onChange={inputChange} startAdornment={"$"} />
					<LabeledInput label={"Liquid Assets"} id={'liquidAssets'} onChange={inputChange} startAdornment={"$"} />
					<LabeledInput label={"Investment Assets"} id={'investmentAssets'} onChange={inputChange} startAdornment={"$"} />
					<LabeledInput label={"Investment Experience"} id={'investmentExperience'} onChange={inputChange} />
					<LabeledInput label={"Overall Objectives"} id={'overallObjectives'} onChange={inputChange} />
					<LabeledInput label={"Time Horizon"} id={'timeHorizon'} onChange={inputChange} />
					<LabeledInput label={"Tax Considerations"} id={'taxConsids'} onChange={inputChange} />
					<LabeledInput label={"Liquid Considerations"} id={'liquidConsids'} onChange={inputChange} />
					<LabeledInput label={"Regulatory Issues"} id={'regulatoryIssues'} onChange={inputChange} />
					<LabeledInput label={"Unique"} id={'unique'} onChange={inputChange} />
					<LabeledInput label={"Return Objectives"} id={'returnObjectives'} onChange={inputChange} />
					<LabeledInput label={"Ability"} id={'riskAbility'} onChange={inputChange} />
					<LabeledInput label={"Willingness"} id={'riskWillingness'} onChange={inputChange} />
					<LabeledInput label={"Overall"} id={'riskOverallAbility'} onChange={inputChange} />
					<Grid container className={classes.buttonBar} justify={'space-around'}>
            <Grid item>
              <Button size="large" variant="raised" color="secondary" className={classes.button}>
    						Cancel
    					</Button>
            </Grid>
            <Grid item>
    					<Button size="large" variant="raised" color="primary" className={classes.button}>
    			      Next
    			    </Button>
             </Grid>

          </Grid>
				</Paper>
			</div>
    )
  }
}

// const { client } = this.props;
// NOTE: Use in Profile, not here
PersonalForm.defaultProps = {
	classes: PropTypes.object.isRequired,
}

// PersonalForm.propTypes = {
//
// }

export default withStyles(styles)(FinancialForm)
