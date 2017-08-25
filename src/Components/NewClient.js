import React, { Component } from 'react';

import AddPersonalInfo  from './Form/AddPersonalInfo'
import AddFinancialInfo  from './Form/AddFinancialInfo'
import AddAccount     from './Form/AddAccount'
import Continue       from './Form/Continue'

import ClientAPI  from '../Data/ClientAPI'

  // Personal Information
var personal = {}

  // Financial Information
var financial = {}

var accounts = []


var numAccounts

class NewClient extends Component {
  constructor() {
    super()
    numAccounts = 0
    this.state = {step : 0,
                  save : false }
  }

  savePersonal(data){
    console.log(data);
    personal = data
    this.setState({step : 1})
  }

  saveFinancial(data){
    console.log(data);
    financial = data
    this.setState({step : 2})
  }

  saveAccount(data){
    data.accNum = numAccounts
    accounts.push(data)
    console.log(accounts);
    this.setState({step : 3, save : true})
  }

  addAccount(){
    financial.accounts = accounts
    console.log(financial);
    numAccounts++
    this.setState({step : 2})
  }

  componentWillUnmount(){
    if (this.state.save) {
      financial.accounts = accounts
      // TODO: Update data structure client.personal; client.financial; client.accounts
      var client = Object.assign(personal, financial)
      console.log(client);
      ClientAPI.addClient(client)
    }
  }

  formStep(){
    var step = this.state.step
    switch (step) {
      case 0:
        return < AddPersonalInfo client={this.personal} newClient={true} save={this.savePersonal.bind(this)}/>
      case 1:
        return < AddFinancialInfo client={this.financial} save={this.saveFinancial.bind(this)}/>
      case 2:
        return < AddAccount btn={'hidden'} account={null} save={this.saveAccount.bind(this)}/>
      case 3:
        return < Continue addAcc={this.addAccount.bind(this)}/>
      default:
        return null
    }
  }

  render(){
    return(
      <div className="container-fluid">
        {this.formStep()}
      </div>
    )
  }
}

export default NewClient
