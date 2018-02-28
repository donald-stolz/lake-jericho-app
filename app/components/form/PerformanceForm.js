import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
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
		const { classes } = this.props;
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
					<MonthYearPicker 	id={'startDate'} onChange={inputChange} />
					<SimpleSelect label={"Tax"} id={'tax'} menu={TAX_MENU}/>
					<SimpleSelect label={"Horizon"} id={'horizon'} menu={HORIZON_MENU}/>
					<SimpleSelect label={"Bias"} id={'bias'} menu={BIAS_MENU}/>
          <LabeledInput label={"Begin Balance"} id={'beginBal'} onChange={inputChange} startAdornment={"$"} />
          <LabeledInput label={"End Balance"} id={'endBal'} onChange={inputChange} startAdornment={"$"} />
          <LabeledInput label={"Net Return"} id={'netReturn'} onChange={inputChange} startAdornment={"%"} />
				</Paper>
			</div>
    )
  }
}

PerformanceForm.defaultProps = {
	classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
}

PerformanceForm.propTypes = {
  handleChange: (event) => {console.log(event)},
}

export default withStyles(styles)(PerformanceForm)
