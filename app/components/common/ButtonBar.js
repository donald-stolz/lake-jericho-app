// NOTE: Should check in parent wether to have enabled right
// i.e. enabled={this.state.buttonEnable}
// Button is rendered as disabled until all data contains values
// TODO Create global button component
disableButton(){
	const { classes } = this.props;
	const {step, client} = this.state
	const readyBtn = (
		<Button
				size="large"
				variant="raised"
				color="primary"
				className={classes.button}
				onClick={this.nextStep.bind(this)}>
			Next
		</Button>
	)
	const disabledBtn = (
		<Button
				size="large"
				variant="raised"
				color="primary"
				className={classes.button}
				disabled>
			Next
		</Button>
	)

	const checkFields = (obj) => Object.values(obj).every(x => x!== ' ');

	switch (step) {
		case 0:
			// Step 1: Displays personal fields
			if (checkFields(client.personal)) { return readyBtn; }
			break;
		case 1:
			// Step 2: Displays general financial fields
			if (checkFields(client.financial)) { return readyBtn; }
			break;
		case 2:
			// Step 3: Displays the add account fields; Final mandatory step
			if (checkFields(client.accounts)) { return readyBtn; }
			break;
		default:
			return disabledBtn;
	}
	return disabledBtn;
}

formButtons(){
	const { classes } = this.props;

	if (this.state.step < 3) {
		return(
			<Grid container className={classes.buttonBar} justify={'space-around'}>
				<Grid item>
					<Button component={Link} to="/"
							size="large"
							variant="raised"
							color="secondary"
							className={classes.button}>
						Cancel
					</Button>
				</Grid>
				<Grid item>
					{this.disableButton()}
				</Grid>
			</Grid>)
	}
}
