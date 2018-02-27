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
      date: this.props.value,
    };

  }

  handleChange = event => {
    // this.setState({
    //   [name]: event.target.value,
    // });
  };
// TODO: Able to pass value
  render(){
    const { classes } = this.props;

    return (
      <FormControl fullWidth className={classes.container}>
        <TextField
          id="date"
          label="Date of Birth"
          type="date"
          placeholder="Date of Birth"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>)
  }
}

DatePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePicker);
