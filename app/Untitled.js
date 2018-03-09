// View Account state
return(
	<div>
		<List component="nav" className={classes.list}>
			<TextField disabled value={account.accName} label="Account Name" disabled className={classes.textField}/>
			<TextField disabled value={account.startDate} label="Start Date" disabled className={classes.textField}/>
			<TextField disabled value={"$" + account.startBal} label="Start Balance" disabled className={classes.textField}/>
			<TextField disabled value={account.tax} label="Tax"disabled className={classes.textField}/>
			<TextField disabled value={account.horizon} label="Horizon" disabled className={classes.textField}/>
			<TextField disabled value={account.bias} label="Bias" disabled className={classes.textField}/>
		</List>
	</div>)


// Previous in account section
handleEditAcc(event){
	const {active} = this.state;
	var newAcc = this.state.accounts[active];
	newAcc = {...newAcc, [event.id] : event.value};
	var updateAccounts = this.state.accounts;
	updateAccounts[active] = newAcc;

	this.setState({accounts: updateAccounts})
}


renderViewOrEdit(){
	const { viewState, active } = this.state;
	const	{classes, accounts} = this.props;
	const updatePerformance = this.updatePerformance.bind(this)
	const handleNewAcc = this.handleNewAcc.bind(this)
	const handleEditAcc = this.handleEditAcc.bind(this)


	// NOTE: Should export and re-use in form
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

	// NOTE: Would ife provide better performance
	switch (viewState) {
		case "view":
			return (
				<div>
					<AccountInfo account={accounts[active]}/>

				</div>
);
			break;
		case "add":
			return(
				<div>
					<AccountForm
						accountChange={handleNewAcc}
						newAccount={true}
						performanceChange={updatePerformance}/>
					{buttons}
				</div>)
			break;
		default:
			return (
				<div>
					<AccountForm
						account={accounts[active]}
						newAccount={false}
						accountChange={handleEditAcc}/>
					{buttons}
				</div>
			);
	}
}
