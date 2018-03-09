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
	value = value + 14; //2014 is oldest record year
	var year = (value).toString();
	return(<MenuItem key={year} value={year}> {year} </MenuItem> )
})


class MonthYearPicker extends React.Component {

	constructor(props){
		super(props);

		var regex = /\s*\/\s*/;
    var values = this.props.value.split(regex);
		var year = values[1];
		var month = values[0];


		this.state = {
      month : month,
      year  : year,
    };
	}

	handleChange = event => {
    // Check if month or year and concat string accordingly
		const {target} = event;
		var {month, year} = this.state
    switch (target.name) {
      case "Month":
        this.setState({month : target.value})
				month = target.value;
        break;
      case "Year":
        this.setState({year : target.value})
				year = target.value;
        break;
    }
		var newValue = month +"/" + year;
    var result = {id: this.props.id, value : newValue}
		this.props.handleChange(result);
	};

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.container} container direction={'row'}>
        <Grid item>
          <FormControl fullWidth className={classes.formControl} >
            <InputLabel shrink={"false"} className={classes.label}>Month</InputLabel>
            <Select
              value={this.state.month}
              onChange={this.handleChange.bind(this)}
              inputProps={{name: "Month",id: "month",}}
            >
              {Months}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl fullWidth className={classes.formControl} >
            <InputLabel shrink={"false"} className={classes.label}>Year</InputLabel>
            <Select
              value={this.state.year}
              onChange={this.handleChange.bind(this)}
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
	value: '01/14',
	id: 'myp',
	handleChange: (event) => {console.log(event.target.value);},
}

export default withStyles(styles)(MonthYearPicker);
