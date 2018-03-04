import React from 'react';
import MaskedInput from 'react-text-mask';
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
    paddingTop: 8,
		width: '100%',
  },
  label: {
    margin: theme.spacing.unit,
		marginTop: 2,
    paddingTop: 8
  },
});

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

class PhoneInput extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      textmask: this.props.value,
    };

  }

  handleChange = event => {
    this.setState({
      textmask : event.target.value,
    });
		this.props.handleChange(event.target);
  };

  render() {
    const { classes } = this.props;
    return (
      <FormControl className={classes.container} >
        <InputLabel className={classes.label}>Phone Number </InputLabel>
        <Input
          value={this.state.textmask}
          inputComponent={TextMaskCustom}
          onChange={this.handleChange.bind(this)}
          className={classes.input}
					id="phone"
          inputProps={{
            'aria-label': 'Description',
          }}
        />
      </FormControl>)
  }
}

PhoneInput.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};

PhoneInput.defaultProps = {
  value: '(  )    -    ',
	handleChange: (event) => {console.log(event);},
}

export default withStyles(styles)(PhoneInput);
