import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import LabeledInput from './LabeledInput';
import PhoneInput from './PhoneInput'
import DatePicker from './DatePicker'
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

class PersonalForm extends Component {
// TODO: Button Events

	handleChange(event){
		// TODO: Should pass to parent
	}

  render(){
		const { classes } = this.props;
    const { client } = this.props;
    return(
			<div className={classes.root}>
  			<Paper className={classes.container} elevation={6}>
          <AppBar className={classes.container} position="static" color="primary" >
  			    <Toolbar>
  			      <Typography variant="title" color="inherit">
  			        Personal Information
  			      </Typography>
  			    </Toolbar>
  			  </AppBar>
					<LabeledInput label={"Name"} onChange={this.handleChange.bind(this)} value={client.name}/>
					<DatePicker onChange={this.handleChange.bind(this)} value={client.dob}/>
					<LabeledInput label={"Address"} onChange={this.handleChange.bind(this)} value={client.address}/>
					<PhoneInput onChange={this.handleChange.bind(this)} value={client.phone}/>
					<LabeledInput label={"Email"} onChange={this.handleChange.bind(this)} value={client.email}/>
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

PersonalForm.defaultProps = {
  client: PropTypes.shape({
		name: PropTypes.string,
		dob: PropTypes.string,
		address: PropTypes.string,
		phone: PropTypes.string,
		email: PropTypes.string,
	}).isRequired
}

PersonalForm.propTypes = {
  client: {
    name: '',
    dob: '',
    address: '',
    phone: '(  )    -    ',
    email: '',
	}
}

export default withStyles(styles)(PersonalForm)
