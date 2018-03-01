import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing.unit,
  },
});

class DatePicker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      [this.props.id]: this.props.value,
    };
  }

  handleChange = event => {
		this.setState({
			[this.props.id] : event.target.value,
		});
		this.props.handleChange(event);
  };
// TODO: Able to pass value
  render(){
    const { classes } = this.props;

    return (
      <FormControl className={classes.container} >
        <TextField
          id={this.props.id}
					label={this.props.label}
          type="date"
          className={classes.textField}
					onChange={this.handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>)
  }
}

DatePicker.propTypes = {
  classes: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};

DatePicker.defaultProps = {
	label: "Date of Birth",
	id: "date",
	handleChange: (event) => {console.log(event.target.value);},
}

export default withStyles(styles)(DatePicker);
