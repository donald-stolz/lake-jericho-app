import React, { Component } from 'react';

import PersonalInfo   from './Profile/PersonalInfo'
import FinancialInfo  from './Profile/FinancialInfo'
import Account        from './Profile/Account'

import ClientAPI  from '../Data/ClientAPI'

class ProfilePage extends Component {
  constructor(props) {
    super()

    this.state = {client : {
        // Personal Information
          name: '',
          dob: '',
          address: '',
          phone: '',
          email: '',

        // Financial Information
          annualIncome: 0,
          totalAssets: '',
          liquidAssets: '',
          investmentAssets: '',
          investmentExperience: '',
          investmentObjectives: '',
          numAccounts: 0,

          accounts : [{
            accNum: 0,
            accName: '',
            startBal: '',
            startDate: '',
            tax: '',
            horizon: '',
            bias: '',
            performanceHist : [{
              date: '',
              tax: '',
              horizon: '',
              bias: '',
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

  setProfile(data){this.setState({client : data})}

  updatePersonal(data){
    const client = this.state.client
      client.name    =  data.name
      client.dob     =  data.dob
      client.address =  data.address
      client.phone   =  data.phone
      client.email   =  data.email
    console.log(client);

    ClientAPI.updateClient(client)
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
    console.log(client);

    ClientAPI.updateClient(client)
    this.setProfile(client)
  }

  updateAccount(data){
    const client = this.state.client
      client.accounts = data
    ClientAPI.updateClient(client)
    this.setProfile(client)
  }


  render(){
    const client    = this.state.client
    const accounts  = client.accounts

    return(
    <div className="container-fluid">
      <PersonalInfo client={client} update={this.updatePersonal.bind(this)}/>
      <FinancialInfo client={client} update={this.updateFinacial.bind(this)}/>
      <Account account={accounts} update={this.updateAccount.bind(this)}/>
    </div>
  )}
}

export default ProfilePage;
