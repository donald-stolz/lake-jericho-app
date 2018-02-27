import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import LabeledInput from '../common/LabeledInput';
import DatePicker from '../common/DatePicker'
import SimpleSelect from '../common/SimpleSelect'
import {
	CLIENT_STRUCT,
	TAX_MENU,
	HORIZON_MENU,
	BIAS_MENU } from '../../constants/constants'

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

class AccountForm extends Component {

	constructor(props){
		super(props);
		this.state={
			CLIENT_STRUCT$accounts
		}
	}

	handleChange(event){
		this.setState({
			[event.target.id]: event.target
		})
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
  			        Account Information
  			      </Typography>
  			    </Toolbar>
  			  </AppBar>
					<LabeledInput label={"Account Name"} id={'accName'} onChange={inputChange} />
					<DatePicker 	label={"Start Date"} id={'startDate'} onChange={this.handleChange.bind(this)} />
					<SimpleSelect label={"Tax"} id={'tax'} menu={TAX_MENU}/>
					<SimpleSelect label={"Horizon"} id={'horizon'} menu={HORIZON_MENU}/>
					<SimpleSelect label={"Bias"} id={'bias'} menu={BIAS_MENU}/>

					// TODO: PerformanceForm

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
AccountForm.defaultProps = {
	classes: PropTypes.object.isRequired,
}

// PersonalForm.propTypes = {
//
// }

export default withStyles(styles)(AccountForm)
