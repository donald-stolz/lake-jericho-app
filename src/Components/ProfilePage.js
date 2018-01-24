import React, { Component } from 'react';
import PersonalInfo   from './Profile/PersonalInfo'
import FinancialInfo  from './Profile/FinancialInfo'
import Account        from './Profile/Account'
import RemoveClient        from './Profile/RemoveClient'
// import ClientAPI  from '../Data/ClientAPI'
import PropTypes from 'prop-types'

// TODO:
// 	[] Lots of refactoring
//	[] Spinner
class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = { loading : true }
		console.log(this.props);
		this.props.get(this.props.match.params.id)
  }

  updatePersonal(data){
	// try: var client = {...this.state.client, personal: data}
    const client = this.state.client
    client.personal = data
    this.updateClient(client)
  }

  updateFinacial(data){
    const client = this.state.client
    client.financial = data
    this.updateClient(client)
  }

  updateAccount(data){
    const client = this.state.client
    client.accounts = data
    this.updateClient(client)
  }

	updateClient(client){
		this.props.update()
	}

	componentWillReceiveProps(nextProps){
		console.log(nextProps);
		var newState = {
			client: nextProps.client,
			loading: false
		}
		this.setState(newState)
	}

  // Methods for changing states in order to remove a client
  removeClient(){this.setState({remove : true})}
  cancelRemove(){this.setState({remove : false})}

  renderPageOrRemove(){
    const client    = this.props.client
    const clientID  = client._id
    const personal  = client.personal
    const financial = client.financial
    const accounts  = client.accounts
    const remove    = this.state.remove

    if (!remove) {
      return(
        <div className="container-fluid">
          <PersonalInfo client={personal} update={this.updatePersonal.bind(this)}/>
          <FinancialInfo client={financial} update={this.updateFinacial.bind(this)}/>
          <Account accounts={accounts} update={this.updateAccount.bind(this)}/>
          <RemoveClient confirm={remove}
                        cancel={this.cancelRemove.bind(this)}
                        removeClient={this.removeClient.bind(this)}/>
        </div>
      )
    }
    else {
      return(
        <div className="container-fluid">
          <RemoveClient confirm={remove}
                        cancel={this.cancelRemove.bind(this)}
                        removeClient={this.removeClient.bind(this)}
                        id={clientID}/>
        </div>)
    }
  }

  render(){
		// TODO: Add loading spinner
		if (this.state.loading) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		}
		else {
			return(
				<div>
					{this.renderPageOrRemove()}
				</div>
		)
		}
	}
}

ProfilePage.propTypes = {
	client: PropTypes.shape({
		// Empty Personal Information
		personal: PropTypes.shape({
			name: PropTypes.string,
			dob: PropTypes.string,
			address: PropTypes.string,
			phone: PropTypes.string,
			email: PropTypes.string,
		}),

		// Empty Financial Information
		financial: PropTypes.shape({
			annualIncome: PropTypes.number,
			totalAssets: PropTypes.number,
			liquidAssets: PropTypes.number,
			investmentAssets: PropTypes.number,
			investmentExperience: PropTypes.string,
			investmentObjectives: PropTypes.string,
			timeHorizon: PropTypes.string,
			taxConsids: PropTypes.string,
			liquidConsids: PropTypes.string,
			regulatoryIssues: PropTypes.string,
			unique: PropTypes.string,
			returnObjective: PropTypes.string,
			riskAbility: PropTypes.string,
			riskWillingness: PropTypes.string,
			riskOverall: PropTypes.string
		}),

		// Empty Account(s) Information
		accounts : PropTypes.arrayOf(PropTypes.shape({
			accNum: PropTypes.number,
			accName: PropTypes.string,
			startBal: PropTypes.string,
			startDate: PropTypes.string,
			tax: PropTypes.string,
			horizon: PropTypes.string,
			bias: PropTypes.string,
			performanceHist : PropTypes.arrayOf(PropTypes.shape({
				date: PropTypes.string,
				tax: PropTypes.string,
				horizon: PropTypes.string,
				bias: PropTypes.string,
				beginBal: PropTypes.number,
				endBal: PropTypes.number,
				netReturn: PropTypes.number
			}))
		}))
	}).isRequired
}

ProfilePage.defaultProps = {
	client : {
		// Empty Personal Information
		personal: {
			name: 'null',
			dob: 'null',
			address: 'null',
			phone: 'null',
			email: 'null',
		},

		// Empty Financial Information
		financial:{
			annualIncome: 0,
			totalAssets: 0,
			liquidAssets: 0,
			investmentAssets: 0,
			investmentExperience: 'null',
			investmentObjectives: 'null',
			timeHorizon: 'null',
			taxConsids: 'null',
			liquidConsids: 'null',
			regulatoryIssues: 'null',
			unique: 'null',
			returnObjective: 'null',
			riskAbility: 'null',
			riskWillingness: 'null',
			riskOverall: 'null'
		},

		// Empty Account(s) Information
		accounts : [{
			accNum: 0,
			accName: 'null',
			startBal: 'null',
			startDate: 'null',
			tax: 'null',
			horizon: 'null',
			bias: 'null',
			performanceHist : [{
				date: 'null',
				tax: 'null',
				horizon: 'null',
				bias: 'null',
				beginBal: 0,
				endBal: 0,
				netReturn: 0
			}]
		}]
	}
}

export default ProfilePage;
