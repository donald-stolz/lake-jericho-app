import React, { Component } from 'react';

import PersonalInfo   from './Profile/PersonalInfo'
import FinancialInfo  from './Profile/FinancialInfo'
import Account        from './Profile/Account'

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
      activeAcc : 0
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


  render(){
    const client    = this.state.client
    const personal  = client.personal
    const financial = client.financial
    const accounts  = client.accounts

    return(
    <div className="container-fluid">
      <PersonalInfo client={personal} update={this.updatePersonal.bind(this)}/>
      <FinancialInfo client={financial} update={this.updateFinacial.bind(this)}/>
      <Account accounts={accounts} update={this.updateAccount.bind(this)}/>
    </div>
  )}
}

export default ProfilePage;
