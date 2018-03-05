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
			editRecord: false,
			index : 0,
			record: this.props.performance[0]
		}
	}

	handleChange = target => {
		var performance = {...this.state.performance, [target.id]:target.value}
		this.setState({record : performance})
	};

	recordSelect = event => {
		// TODO: Set index based on record selected
		// Key from list?
		console.log(event.target);
	}

	editPerformnce = () => {this.setState({editRecord: true})}

	newPerformance = () => {this.setState({newRecord: true})}

	save(){
		// Update account details or add new performance record
		const {record} = this.state;
		var {performance} = this.props;
		if (this.state.newRecord) {
			performance.push(record);
		}else {
			performance[index] = record;
		}
		this.props.handleChange(performance);
		this.cancel();
	}

	cancel(){
		this.setState({
			newRecord: false,
			editRecord: false
		})
	}

	render(){
		const { newRecord, editRecord, index } = this.state;
		const {classes, performance } = this.props;
		const select = this.recordSelect.bind(this);
		const edit = this.editPerformnce.bind(this);
		const dates = performance.map((record) => {return record.date});
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
		}
		else if (editRecord) {
			return(
				<div>
					<PerformanceForm pastPerformance={performance[this.state.index]}/>
					{buttons}
				</div>)
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
							value={performance[index].date}
							menu={dates}
							handleChange={select}/>
						<TextField label="Tax" value={performance[index].tax} id={'tax'} disabled className={classes.textField}/>
						<TextField label="Horizon" value={performance[index].horizon} id={'horizon'}disabled className={classes.textField}/>
						<TextField label="Bias" value={performance[index].bias} id={'bias'} disabled className={classes.textField}/>
	          <TextField label="Begin Balance" value={"$ "+performance[index].beginBal} id={'beginBal'} startadornment={"$"} disabled className={classes.textField}/>
	          <TextField label="End Balance" value={"$ "+performance[index].endBal} id={'endBal'} startadornment={"$"} disabled className={classes.textField}/>
	          <TextField label="Net Return" value={performance[index].netReturn+" %"} id={'netReturn'} startadornment={"%"} disabled className={classes.textField}/>
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
