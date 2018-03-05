import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import SimpleSelect from '../common/SimpleSelect'
import AddIcon from 'material-ui-icons/Add';
import PerformanceForm from '../form/PerformanceForm'
import Grid from 'material-ui/Grid';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
		width: '100%',
  },
	flex: {
		flex: 1,
	},
  list:{
		paddingLeft: theme.spacing.unit * 2,
		minWidth: 300,
		maxWidth: 500
	},
	textField: {
		margin: theme.spacing.unit,
		paddingBottom: 2,
		flexWrap: 'wrap',
		width: '100%',
	},
});

class PerformanceInfo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			newRecord : false,
			edit: false,
			value : 0
		}
	}

	recordSelect = event => {
		console.log(event.target);
	}

	editPerformnce = () => {
		this.setState({edit: true})
	}

	newPerformance = () => {
		this.setState({newRecord: true})
	}

	save(){

	}

	cancel(){
		this.setState({
			newRecord: false,
			edit: false
		})
	}

	render(){
		const { newRecord, value } = this.state;
		const {classes, performance} = this.props;
		const select = this.recordSelect.bind(this)
		const edit = this.editPerformnce.bind(this)
		const dates = performance.map((record) => {return record.date})
		const buttons = (
			<Grid container className={classes.buttonBar} justify={'space-around'}>
				<Grid item>
					<Button
							onClick={this.cancel.bind(this)}
							size="large"
							variant="raised"
							color="secondary"
							className={classes.button}>
						Cancel
					</Button>
				</Grid>
				<Grid item>
					<Button
							onClick={this.save.bind(this)}
							size="large"
							variant="raised"
							color="primary"
							className={classes.button}
							>
						Save
					</Button>
				 </Grid>
			</Grid>
		)

		if (newRecord) {
			return (
				<div>
				<PerformanceForm pastPerformance={performance[0]}/>
				{buttons}
				</div>
			)
		}else if (edit) {
			<div>
			<PerformanceForm pastPerformance={performance[this.state.value]}/>
			{buttons}
			</div>
		}
		else {
			return(
				<div className={classes.root}>
  			<Paper className={classes.container} elevation={6}>
          <AppBar className={classes.container} position="static" color="primary" >
  			    <Toolbar>
  			      <Typography variant="title" color="inherit" className={classes.flex}>
  			        Performance History
  			      </Typography>
							<Button color="inherit"
								onClick={edit}>
								Edit
							</Button>
							<Button color="default" variant="fab"
								onClick={this.newPerformance.bind(this)}>
								<AddIcon size={"small"}/>
							</Button>
  			    </Toolbar>
  			  </AppBar>

					<List component="nav" className={classes.list}>
						<SimpleSelect label="Date"
							id="startDate"
							value={performance[value].date}
							menu={dates}
							handleChange={select}/>
						<TextField label="Tax" value={performance[value].tax} id={'tax'} disabled className={classes.textField}/>
						<TextField label="Horizon" value={performance[value].horizon} id={'horizon'}disabled className={classes.textField}/>
						<TextField label="Bias" value={performance[value].bias} id={'bias'} disabled className={classes.textField}/>
	          <TextField label="Begin Balance" value={"$ "+performance[value].beginBal} id={'beginBal'} startadornment={"$"} disabled className={classes.textField}/>
	          <TextField label="End Balance" value={"$ "+performance[value].endBal} id={'endBal'} startadornment={"$"} disabled className={classes.textField}/>
	          <TextField label="Net Return" value={performance[value].netReturn+" %"} id={'netReturn'} startadornment={"%"} disabled className={classes.textField}/>
					</List>
				</Paper>
			</div>)
		}
	}
}

PerformanceInfo.propTypes = {
	classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
	performance: PropTypes.arrayOf(PropTypes.shape({
		date: PropTypes.string.isRequired,
		tax: PropTypes.string.isRequired,
		horizon: PropTypes.string.isRequired,
		bias: PropTypes.string.isRequired,
		beginBal: PropTypes.string.isRequired,
		endBal: PropTypes.string.isRequired,
		netReturn: PropTypes.string.isRequired
	})).isRequired
}

PerformanceInfo.defaultProps = {
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

export default withStyles(styles)(PerformanceInfo)
