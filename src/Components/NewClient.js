import React, { Component } from 'react';

import AddPersonalInfo  from './Form/AddPersonalInfo'
import AddFinancialInfo  from './Form/AddFinancialInfo'
import AddAccount     from './Form/AddAccount'
import Continue       from './Form/Continue'

import ClientAPI  from '../Data/ClientAPI'

var personal = {}

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

// Steps for saving form from GUI & adding to DB

  // Step 1: Saves personal data to local variable
  //            and changes page to save financial
  savePersonal(data){

    personal = data

    this.setState({step : 1})
  }

  // Step 2: Saves financial data to local variable
  //            and changes page to save an account
  saveFinancial(data){
    financial = data

    this.setState({step : 2})
  }
  // Step 3: Saves account data to local variable
  //            and changes page to option page
  saveAccount(data){
    data.accNum = numAccounts
    accounts.push(data)

    this.setState({step : 3, save : true})
  }

  // Optional Step: Increments number of accounts
  //            and sets page to add another account
  addAccount(){

    numAccounts++
    this.setState({step : 2})
  }

// Final Step: Routes to home; Saves new client to DB on unmount
  componentWillUnmount(){
    if (this.state.save) {
      // financial.accounts = accounts
      // TODO: Update data structure client.personal; client.financial; client.accounts
      console.log(personal);
      console.log(financial);
      console.log(accounts);
      var client = {personal: personal,
                    financial: financial,
                    accounts: accounts
                    }

      console.log(client);

      ClientAPI.addClient(client)
    }
  }

  formStep(){
  //Steps for dispalying form
    var step = this.state.step
    switch (step) {
      case 0:
        // Step 1: Displays personal fields
        return < AddPersonalInfo client={this.personal} newClient={true} save={this.savePersonal.bind(this)}/>
      case 1:
        // Step 2: Displays general financial fields
        return < AddFinancialInfo client={this.financial} newClient={true} save={this.saveFinancial.bind(this)}/>
      case 2:
        // Step 3: Displays the add account fields; Final mandatory step
        return < AddAccount btn={'hidden'} account={null} newClient={true} save={this.saveAccount.bind(this)}/>
      case 3:
        // Step 4: Allows user to choose between adding another account or finishing
        // Client will be saved to DB if user cancels on additional account(s)
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
