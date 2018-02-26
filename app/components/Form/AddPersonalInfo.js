import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LabeledInput from './LabeledInput';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  root: {
		flex: 1,
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

class AddPersonalInfo extends Component {
// TODO: Button Events

	handleChange(event){
		// TODO
	}

  render(){
		const { classes } = this.props;

    return(
			<div className={classes.container}>
			  <AppBar position="static" color="default">
			    <Toolbar>
			      <Typography variant="title" color="inherit">
			        Personal Information
			      </Typography>
			    </Toolbar>
			  </AppBar>
				<Paper elevation={4}>
					<LabeledInput label={"Name"} onChange={this.handleChange.bind(this)} />
					<LabeledInput label={"ToDo Date"} onChange={this.handleChange.bind(this)} />
					<LabeledInput label={"Address"} onChange={this.handleChange.bind(this)} />
					<LabeledInput label={"Phone Number"} onChange={this.handleChange.bind(this)} />
					<LabeledInput label={"Email"} onChange={this.handleChange.bind(this)} />
					<Button variant="raised" color="secondary" className={classes.cancelButton}>
						Cancel
					</Button>
					<Button variant="raised" color="primary" className={classes.nextButton} >
			      Next
			    </Button>
				</Paper>
			</div>
    )
  }
}

// <DateInput label={"Date of Birth"} onChange={this.handleChange.bind(this)}/>


export default withStyles(styles)(AddPersonalInfo)
