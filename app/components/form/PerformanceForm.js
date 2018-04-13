import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List';

import Typography from 'material-ui/Typography';
import LabeledInput from '../common/LabeledInput';
import MonthYearPicker from '../common/MonthYearPicker'
import SimpleSelect from '../common/SimpleSelect'

import {
	CLIENT_STRUCT,
	TAX_MENU,
	HORIZON_MENU,
	BIAS_MENU } from '../../constants/constants'

const styles = theme => ({
  root: {
		flex: 1,
  },
	list:{
		paddingLeft: theme.spacing.unit * 2,
		minWidth: 300,
		maxWidth: 500
	},
  container: {
    display: 'flex',
    flexWrap: 'wrap',
		width: '100%'
  },
});

class PerformanceForm extends Component {

  render(){
		const { classes, newRecord } = this.props;
		var {pastPerformance} = this.props;
		const inputChange = this.props.handleChange.bind(this)

// TODO: Fix issues with MonthYearPicker &
    return(
			<div className={classes.root}>
  			<Paper className={classes.container} elevation={6}>
          <AppBar className={classes.container} position="static" color="primary" >
  			    <Toolbar>
  			      <Typography variant="title" color="inherit">
  			        Performance History
  			      </Typography>
  			    </Toolbar>
  			  </AppBar>
					<List component="nav" className={classes.list}>
						<MonthYearPicker id="date" value={pastPerformance.date} handleChange={inputChange} newRecord={newRecord}/>
						<SimpleSelect label="Tax" value={pastPerformance.tax} id={'tax'} menu={TAX_MENU} handleChange={inputChange}/>
						<SimpleSelect label="Horizon" value={pastPerformance.horizon} id={'horizon'} menu={HORIZON_MENU} handleChange={inputChange}/>
						<SimpleSelect label="Bias" value={pastPerformance.bias} id={'bias'} menu={BIAS_MENU} handleChange={inputChange}/>
	          <LabeledInput label="Begin Balance" value={pastPerformance.beginBal} id={'beginBal'} handleChange={inputChange} startadornment={"$"} />
	          <LabeledInput label="End Balance" value={pastPerformance.endBal}id={'endBal'} handleChange={inputChange} startadornment={"$"} />
	          <LabeledInput label="Net Return" value={pastPerformance.netReturn} id={'netReturn'} handleChange={inputChange} startadornment={"%"} />
					</List>
				</Paper>
			</div>
    )
  }
}
PerformanceForm.propTypes = {
	classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
	pastPerformance: PropTypes.shape({
		date: PropTypes.string.isRequired,
		tax: PropTypes.string.isRequired,
		horizon: PropTypes.string.isRequired,
		bias: PropTypes.string.isRequired,
		beginBal: PropTypes.string.isRequired,
		endBal: PropTypes.string.isRequired,
		netReturn: PropTypes.string.isRequired
	}).isRequired,
}

PerformanceForm.defaultProps = {
  handleChange: (event) => {console.log(event)},
	pastPerformance : {
		date: '01/14',
		tax: ' ',
		horizon: ' ',
		bias: ' ',
		beginBal: ' ',
		endBal: ' ',
		netReturn: ' '
	},
}

export default withStyles(styles)(PerformanceForm)
