import React, { Component } from 'react';

import AddClientInfo  from './Form/AddClientInfo'
import AddAccount     from './Form/AddAccount'
import Continue       from './Form/Continue'

import ClientAPI  from '../Data/ClientAPI'

var Client = {
  // Personal Information
    name: null,
    dob: null,
    mailingAddress: null,
    phoneNumber: null,
    email: null,

  // Financial Information
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

  saveInfoFields(data){
    client = data
    this.setState({step : 1})
  }

  saveAccountFields(data){
    accounts.push(data)
    client.accounts = accounts
    this.setState({step : 2})
  }

  AddAccount(){
    this.setState({step : 1})
  }

  componentWillUnmount(){
    if (this.state.save) {
      var new client
      clientAPI.addClient()
    }
  }

  formStep(step){
    switch (step) {
      case 0:
        return < AddClientInfo />
      case 1:
        return < AddAccount />
      case 2:
        return < Continue />

    }
  }

  render(){
    return(

    )
  }
}
