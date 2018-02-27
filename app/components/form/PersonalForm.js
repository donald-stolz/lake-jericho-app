import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
// import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import LabeledInput from '../common/LabeledInput';
import PhoneInput from '../common/PhoneInput'
import DatePicker from '../common/DatePicker'
// import Grid from 'material-ui/Grid';

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

  render(){
		const { classes } = this.props;
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
					<LabeledInput label={"Name"} onChange={inputChange} />
					<DatePicker onChange={inputChange} />
					<LabeledInput label={"Address"} onChange={inputChange} />
					<PhoneInput onChange={inputChange} />
					<LabeledInput label={"Email"} onChange={inputChange} />
				</Paper>
			</div>
    )
  }
}

PersonalForm.defaultProps = {
	classes: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
}


PersonalForm.propTypes = {
	handleChange: (event) => {console.log(event.target.value);},
}

export default withStyles(styles)(PersonalForm)

// // const { client } = this.props;
// // NOTE: Use in Profile, not here
// PersonalForm.defaultProps = {
// 	classes: PropTypes.object.isRequired,
//
// }
//
// PersonalForm.propTypes = {
//
// }
