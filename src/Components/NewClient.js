import React, { Component } from 'react';

import AddPersonalInfo  from './Form/AddPersonalInfo'
import AddFinancialInfo  from './Form/AddFinancialInfo'
import AddAccount     from './Form/AddAccount'
import Continue       from './Form/Continue'

import ClientAPI  from '../Data/ClientAPI'

  // Personal Information
var personal = {
    name: null,
    dob: null,
    address: null,
    phone: null,
    email: null,
}
  // Financial Information
var financial ={
    annualIncome: null,
    totalAssets: null,
    liquidAssets: null,
    investmentAssets: null,
    investmentExperience: null,
    investmentObjectives: null,
    accounts : null
  }

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
}

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
      clientAPI.addClient()
    }
  }

  formStep(step){
    switch (step) {
      case 0:
        return < AddClientInfo client={this.personal} onSave={this.savePersonal.bind(this)}/>
      case 1:
        return < AddFinancialInfo client={this.financial} onSave={this.saveFinancial.bind(this)}/>
      case 2:
        return < AddAccount account={this.accounts} onSave={this.saveAccount.bind(this)}/>
      case 3:
        return < Continue />

    }
  }

  render(){
    return(
      <div className="container-fluid">
        {formStep(this.state.step)}
      <div>
    )
  }
}
