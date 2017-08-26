import React, { Component } from 'react';

import PersonalInfo   from './Profile/PersonalInfo'
import FinancialInfo  from './Profile/FinancialInfo'
import Account        from './Profile/Account'
import RemoveClient        from './Profile/RemoveClient'

import ClientAPI  from '../Data/ClientAPI'

class ProfilePage extends Component {
  constructor() {
    super()

    this.state = {client : {
        // Personal Information
        personal: {
          name: null,
          dob: null,
          address: null,
          phone: null,
          email: null,
        },

        // Financial Information
        financial:{
          annualIncome: 0,
          totalAssets: 0,
          liquidAssets: 0,
          investmentAssets: 0,
          investmentExperience: null,
          investmentObjectives: null,
          timeHorizon: null,
          taxConsids: null,
          liquidConsids: null,
          regulatoryIssues: null,
          unique: null,
          returnObjective: null,
          riskAbility: null,
          riskWillingness: null,
          riskOverall: null
        },

        // Account(s) Information
        accounts : [{
          accNum: 0,
          accName: null,
          startBal: null,
          startDate: null,
          tax: null,
          horizon: null,
          bias: null,
          performanceHist : [{
            date: null,
            tax: null,
            horizon: null,
            bias: null,
            beginBal: 0,
            endBal: 0,
            netReturn: 0
          }]
        }]
      },
      remove : false
    }
  }

  componentWillMount(){
    const id = this.props.match.params.id
    ClientAPI.getClient(id, this.setProfile.bind(this))
  }

  setProfile(data){
    //console.log("Set Profile");
    this.setState({client : data})}

  updatePersonal(data){
    const client = this.state.client
      client.personal = data
    //console.log(client);

    ClientAPI.updateClient(client)
    this.setProfile(client)
  }

  updateFinacial(data){
    const client = this.state.client
      client.financial = data
    //console.log(client);

    ClientAPI.updateClient(client)
    this.setProfile(client)
  }

  updateAccount(data){
    var account = []
    account.push(data)
    const client = this.state.client
    client.accounts = data
    // console.log(client);
    ClientAPI.updateClient(client)
    this.setProfile(client)
  }

  removeClient(){
    this.setState({remove : true})
  }

  cancelRemove(){
    this.setState({remove : false})
  }

  renderPageOrRemove(){
    const client    = this.state.client
    const clientID  = client._id
    const personal  = client.personal
    const financial = client.financial
    const accounts  = client.accounts
    const remove    = this.state.remove
    console.log(clientID);

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


    return(
      <div>
        {this.renderPageOrRemove()}
      </div>
  )}
}

export default ProfilePage;
