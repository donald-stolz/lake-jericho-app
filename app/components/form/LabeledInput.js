import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
		paddingBottom: 2
  },
});

// TODO: Add adornments

class LabeledInput extends React.Component {
	handleChange = event => {
		console.log(event.target.id);
		// const id = this.props.id;
    // this.props.onChange()
  };

	render(){
		const { classes } = this.props;

	  return (
      <FormControl fullWidth className={classes.container}>
	      <InputLabel shrink={"false"} className={classes.input}>{this.props.label} </InputLabel>
	      <Input
					value={this.props.value}
					onChange={this.handleChange}
	        className={classes.input}
					id={this.props.id}
	        inputProps={{
	          'aria-label': 'Description',
	        }}
	      />
	    </FormControl>
	  );
	}
}
//Props:
	// label
	// value
	// onChange

LabeledInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabeledInput);
