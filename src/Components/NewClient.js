import React, { Component } from 'react';

import AddPersonalInfo  from './Form/AddPersonalInfo'
import AddFinancialInfo  from './Form/AddFinancialInfo'
// import AddAccount     from './Form/AddAccount'
// import Continue       from './Form/Continue'

import ClientAPI  from '../Data/ClientAPI'

  // Personal Information
var personal
  // Financial Information
var financial

var accounts : [{
      accNum: null,
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
        beginBal: null,
        endBal: null,
        netReturn: null
      }]
    }]


var numAccounts

class NewClient extends Component {
  constructor() {
    super()
    numAccounts = 0
    this.state = {step : 0,
                  save : false }
  }

  savePersonal(data){
    personal = data
    this.setState({step : 1})
  }

  saveFinancial(data){
    financial = data
    this.setState({step : 2})
  }

  saveAccount(data){
    data.accNum = numAccounts
    accounts.push(data)
    numAccounts++
    this.setState({step : 3})
  }

  AddAccount(){
    this.setState({step : 2})
  }

  componentWillUnmount(){
    if (this.state.save) {
      var client = Object.assign(personal, financial)
      ClientAPI.addClient(client)
    }
  }

  formStep(){
    var step = this.state.step
    switch (step) {
      case 0:
        return < AddPersonalInfo client={null} save={this.savePersonal.bind(this)}/>
      case 1:
        return < AddFinancialInfo client={this.financial} save={this.saveFinancial.bind(this)}/>
      // case 2:
      //   return < AddAccount account={this.accounts} save={this.saveAccount.bind(this)}/>
      // case 3:
      //   return < Continue />
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
