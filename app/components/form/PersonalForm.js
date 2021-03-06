import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
// import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import LabeledInput from '../common/LabeledInput';
import PhoneInput from '../common/PhoneInput'
import DatePicker from '../common/DatePicker'

import MonthYearPicker from '../common/MonthYearPicker'
// import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
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
	}
});

class PersonalForm extends Component {
// TODO: Button Events
	handleChange = target => {
		this.props.handleChange(target);
	};

  render(){
		const { classes, client } = this.props;
		const inputChange = this.props.handleChange.bind(this)


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
					<List component="nav" className={classes.list}>
						<LabeledInput value={client.name} label={"Name"} id={"name"} handleChange={inputChange} />
						<DatePicker value={client.dob} handleChange={inputChange} id={"dob"} />
						<LabeledInput value={client.address} label={"Address"} id={"address"} handleChange={inputChange} />
						<PhoneInput value={client.phone} handleChange={inputChange} id={"phone"} />
						<LabeledInput value={client.email} label={"Email"} id={"email"} handleChange={inputChange} />
					</List>
				</Paper>
			</div>
    )
  }
}

PersonalForm.propTypes = {
	classes: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	client: PropTypes.shape({
		name: PropTypes.string,
		dob: PropTypes.string,
		address: PropTypes.string,
		phone: PropTypes.string,
		email: PropTypes.string,
	}).isRequired
}
// TODO: Add client

PersonalForm.defaultProps = {
	handleChange: (event) => {console.log(event);},
	client: {
		name: ' ',
		dob: ' ',
		address: ' ',
		phone: ' ',
		email: ' ',
	}
}

export default withStyles(styles)(PersonalForm)
