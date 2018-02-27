<div className={classes.root}>
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Personal Information
      </Typography>
    </Toolbar>
  </AppBar>
	<Paper className={classes.root} elevation={4}>
		<LabeledInput label={"Name"} onChange={this.handleChange.bind(this)} />
		<DateInput label={"Date of Birth"} onChange={this.handleChange.bind(this)}/>
		<LabeledInput label={"Name"} onChange={this.handleChange.bind(this)} />
		<LabeledInput label={"Address"} onChange={this.handleChange.bind(this)} />
		<LabeledInput label={"Phone Number"} onChange={this.handleChange.bind(this)} />
		<LabeledInput label={"Email"} onChange={this.handleChange.bind(this)} />
		<Button variant="raised" color="secondary" className={classes.button}>
			Cancel
		</Button>
		<Button variant="raised" color="primary" className={classes.button}>
      Next
    </Button>
	</Paper>
