import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
		display: 'flex',
    flexWrap: 'wrap',
  },
	label: {
    marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit
  },
});

class SimpleSelect extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			value: this.props.value,
		};
	}

	handleChange = event => {

		this.setState({
			value : event.target.value,
		});
		this.props.handleChange(event);
	};

  render() {
    const { classes, menu, label, id } = this.props;
		const MenuItems = menu.map((item, index) => {
				return(<MenuItem key={index} value={item}> {item} </MenuItem> )
			});

			console.log(this.state.value);
    return (
        <FormControl className={classes.formControl}>
          <InputLabel shrink={"false"} className={classes.label}>{label}</InputLabel>
          <Select
            value={this.state.value}
            onChange={this.handleChange}
            inputProps={{
              name: id,
              id: id,
            }}
          >
            {MenuItems}
          </Select>
        </FormControl>
			)
		}
}
SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

SimpleSelect.defaultProps = {
	value: '',
	label: "Select",
	id: "select",
	handleChange: (event) => {console.log(event.target.value);},
	menu: ["No Options"]
}

export default withStyles(styles)(SimpleSelect);
