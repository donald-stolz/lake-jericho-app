import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  label: {
    margin: theme.spacing.unit,
		paddingBottom: 8
  },
	input: {
    margin: theme.spacing.unit,
		paddingTop: 10
  },
});

// TODO: Add adornments

class LabeledInput extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			value : this.props.value
		}
	}

	handleChange = event => {
		this.setState({
      value : event.target.value,
    });
		this.props.handleChange(event.target);
  };

	render(){
		const { classes } = this.props;


		var startAdornment = null;
		if (this.props.startAdornment) {
			startAdornment = (
				<InputAdornment className={classes.adornment} position="start">
					{this.props.startAdornment}
				</InputAdornment>)
		}

	  return (
      <FormControl className={classes.container}>
	      <InputLabel shrink={"false"} className={classes.label}>{this.props.label} </InputLabel>
	      <Input
					multiline={'true'}
					startAdornment={startAdornment}
					value={this.state.value}
					handleChange={this.handleChange}
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
	// handleChange

LabeledInput.propTypes = {
  classes: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	startAdornment: PropTypes.string,
};

LabeledInput.defaultProps = {
	id: 'labeledInput',
	value: '',
	handleChange: (event) => {console.log(event.target.value);},
}

export default withStyles(styles)(LabeledInput);
