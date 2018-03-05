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
		paddingTop: 10,
		width: '100%',
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


		var startadornment = null;
		if (this.props.startadornment) {
			startadornment = (
				<InputAdornment className={classes.adornment} position="start">
					{this.props.startadornment}
				</InputAdornment>)
		}

	  return (
      <FormControl className={classes.container}>
	      <InputLabel shrink={"false"} className={classes.label}>{this.props.label} </InputLabel>
	      <Input
					multiline={'true'}
					startAdornment={startadornment}
					value={this.state.value}
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

LabeledInput.propTypes = {
  classes: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	startadornment: PropTypes.string,
};

LabeledInput.defaultProps = {
	id: 'labeledInput',
	value: '',
	handleChange: (event) => {console.log(event.target);},
}

export default withStyles(styles)(LabeledInput);
