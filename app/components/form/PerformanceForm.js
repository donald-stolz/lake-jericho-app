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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
		width: '100%'
  },
});

class PerformanceForm extends Component {

	constructor(props){
		super(props);
		this.state={...CLIENT_STRUCT.accounts[0].performanceHist}
	}

	// handleChange(event){
	// 	this.setState({
	// 		[event.target.id]: event.target
	// 	})
	// }

  render(){
		const { classes, performance } = this.props;
		const inputChange = this.props.handleChange.bind(this)

    return(
			<div className={classes.root}>
  			<Paper className={classes.container} elevation={6}>
          <AppBar className={classes.container} position="static" color="primary" >
  			    <Toolbar>
  			      <Typography variant="title" color="default">
  			        Performance History
  			      </Typography>
  			    </Toolbar>
  			  </AppBar>
					<List component="nav" className={classes.list}>
						<MonthYearPicker 	id="startDate" value={client.startDate} onChange={inputChange} />
						<SimpleSelect label="Tax" value={client.tax} id={'tax'} menu={TAX_MENU}/>
						<SimpleSelect label="Horizon" value={client.horizon} id={'horizon'} menu={HORIZON_MENU}/>
						<SimpleSelect label="Bias" value={client.bias} id={'bias'} menu={BIAS_MENU}/>
	          <LabeledInput label="Begin Balance" value={client.beginBal} id={'beginBal'} onChange={inputChange} startAdornment={"$"} />
	          <LabeledInput label="End Balance" value={client.endBal} id={'endBal'} onChange={inputChange} startAdornment={"$"} />
	          <LabeledInput label="Net Return" value={client.netReturn} id={'netReturn'} onChange={inputChange} startAdornment={"%"} />
					</List>
				</Paper>
			</div>
    )
  }
}

PerformanceForm.propTypes = {
	classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
	performance: PropTypes.shape({
		date: PropTypes.string.isRequired,
		tax: PropTypes.string.isRequired,
		horizon: PropTypes.string.isRequired,
		bias: PropTypes.string.isRequired,
		beginBal: PropTypes.string.isRequired,
		endBal: PropTypes.string.isRequired,
		netReturn: PropTypes.string.isRequired
	}).isRequired
}

PerformanceForm.defaultProps = {
  handleChange: (event) => {console.log(event)},
	performance : [{
		date: ' ',
		tax: ' ',
		horizon: ' ',
		bias: ' ',
		beginBal: '0',
		endBal: '0',
		netReturn: '0'
	}]
}

export default withStyles(styles)(PerformanceForm)
