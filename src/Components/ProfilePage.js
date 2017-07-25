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
          name: null,
          dob: null,
          address: null,
          phone: null,
          email: null,

        // Financial Information
          annualIncome: 0,
          totalAssets: null,
          liquidAssets: null,
          investmentAssets: null,
          investmentExperience: null,
          investmentObjectives: null,
          numAccounts: 0,

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
    console.log("Set Profile");
    this.setState({client : data})}

  updatePersonal(data){
    const client = this.state.client
      client.name    =  data.name
      client.dob     =  data.dob
      client.address =  data.address
      client.phone   =  data.phone
      client.email   =  data.email
    console.log(client);

    // ClientAPI.updateClient(client)
    this.setProfile(client)
  }

  updateFinacial(data){
    const client = this.state.client
      client.annualIncome         = data.annualIncome
      client.totalAssets          = data.totalAssets
      client.liquidAssets         = data.liquidAssets
      client.investmentAssets     = data.investmentAssets
      client.investmentExperience = data.investmentExperience
      client.overallObjectives    = data.overallObjectives
      client.performanceHist      = data.performanceHist
    console.log(client);

    // ClientAPI.updateClient(client)
    this.setProfile(client)
  }

  updateAccount(data){
    var account = []
    account.push(data)
    const client = this.state.client
      client.accounts = data
      console.log(client);
    // ClientAPI.updateClient(client)
    // this.setProfile(client)
  }


  render(){
    const client    = this.state.client
    const accounts  = client.accounts
    // console.log(accounts);
    return(
    <div className="container-fluid">
      <PersonalInfo client={client} update={this.updatePersonal.bind(this)}/>
      <FinancialInfo client={client} update={this.updateFinacial.bind(this)}/>
      <Account accounts={accounts} update={this.updateAccount.bind(this)}/>
    </div>
  )}
}

export default ProfilePage;
