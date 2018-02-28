import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
		display: 'flex',
    flexWrap: 'wrap',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
		width: '100%'
  },
	label: {
    marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit
  },
});

const Months = Array.from(Array(12).keys()).map(value => {
	value = value + 1;
	var month = (value).toString();
	//Add 0 for months less than 10
	if (value < 10) {month = "0"+ month}
	return(<MenuItem key={month} value={month}> {month} </MenuItem> )
})

const Years = Array.from(Array(30).keys()).map(value => {
	value = value + 1;
	var year = (value).toString();
	//Add 0 for months less than 10
	if (value < 10) {year = "0"+ year}
	return(<MenuItem key={year} value={year}> {year} </MenuItem> )
})


class MonthYearPicker extends React.Component {

	constructor(props){
		super(props);
    const val = this.props.value;
		this.state = {
      value : val,
      month : val.slice(0,1),
      year  : val.slice(3,4)
    };
	}

	handleChange = event => {
    // Check if month or year and concat string accordingly
    const target = event.target
    var newValue = this.state.value
    switch (target.name) {
      case "Month":
        newValue = target.value + newValue.slice(2,5)
        this.setState({month : target.value})
        break;
      case "Year":
        newValue = newValue.slice(0,3) + target.value
        this.setState({year : target.value})

        break;
      default:
    }
		this.setState({value : newValue});
    var result = {id: this.props.id, value : newValue}
    console.log(this.state);
		// this.props.handleChange(result);
	};

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.container} container direction={'row'}>
        <Grid item>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel shrink={"false"} className={classes.label}>Month</InputLabel>
            <Select
              value={this.state.month}
              onChange={this.handleChange}
              inputProps={{name: "Month",id: "month",}}
            >
              {Months}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel shrink={"false"} className={classes.label}>Year</InputLabel>
            <Select
              value={this.state.year}
              onChange={this.handleChange}
              inputProps={{ name: "Year", id: "year",}}
            >
              {Years}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
		)
	}
}
MonthYearPicker.propTypes = {
  classes: PropTypes.object.isRequired,
	value: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};

MonthYearPicker.defaultProps = {
	value: '01/01',
	id: 'myp',
	handleChange: (event) => {console.log(event.target.value);},
}

export default withStyles(styles)(MonthYearPicker);
