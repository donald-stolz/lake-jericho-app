import React, { Component } from 'react';
import AddAccount from '../Form/AddAccount'
import AccountNavList from '../List/AccountNavList'
import PerformanceHistory from './PerformanceHistory'
import RemoveAccount from './RemoveAccount'

class Account extends Component {
  constructor() {
    super()

    this.state = {editing : false,
                  newAcc  : false,
                  remove  : false,
                  active  : 0}
  }

  setEditing(){
    this.setState({editing : true})
    this.setState({newAcc : false})
  }

  setAddAccount(){
    this.setState({newAcc : true})
    this.setState({editing : true})
  }

  updateInfo(data){
    // Recieves new account data
    const active = this.state.active
    var accounts = []
    accounts = this.props.accounts

    // Assigns values not recorded
    data.accNum = accounts[active].accNum
    data.performanceHist = accounts[active].performanceHist
    // Assigns data to active account
    accounts[active] = data

    this.props.update(accounts)
    // Returns to state to read-only
    this.cancelEdit()
  }

  addAccount(newAcc){
    // Recieves new account data from child
    // New temporary accounts array
    var accounts = []
    // Stores previous accounts
    accounts = this.props.accounts
    // Assigns account number
    newAcc.accNum = accounts.length;
    // Pushs account to array with previous data
    accounts.push(newAcc)
    // Sends update to parent
    this.props.update(accounts)
    // Returns to state to read-only
    this.cancelEdit()
  }

  confirmRemove(){
    this.setState({editing : true})
    this.setState({newAcc : false})
    this.setState({remove  : true})
  }

  removeAccount(accNum){
    // Recieves accNum of account to remove. Copies accounts
    var accounts = [];
        accounts = this.props.accounts;
    // Remove accounts[annNum]
    accounts.splice(accNum, 1);
    // Iterates through accounts array and reassigns accNums
    for (var i = 0; i < accounts.length; i++) {
      accounts[i].accNum = i;
    }
    // send updated accounts to ProfilePage
    this.props.update(accounts)
    this.cancelEdit()
    this.setActive(0)
  }

  cancelEdit(){
    // Returns to state to read-only
    this.setState({editing : false})
    this.setState({newAcc : false})
    this.setState({remove : false})
  }

  addPerformance(data){
    const active = this.state.active
    var accounts = []

    accounts = this.props.accounts
    accounts[active].performanceHist = data

    this.props.update(accounts)
  }

  setActive(accNum){
    //Recieves accNum to set as active from AccountNavList
    this.setState({active: accNum})
  }

  renderItemEditNew(){
    const accounts  = this.props.accounts
    const editing   = this.state.editing
    const newAcc    = this.state.newAcc
    const active    = this.state.active
    const remove    = this.state.remove

    var account = accounts[active]

    /* Display cases:
        1) Display saved values of selected account
        2) Create a brand new account
        3) Edit the data of an existing account
    */
    // TODO: Place RemoveButton below performance history
    if (!editing) {
      return (
        <div className="container-fluid">
          <div className="panel panel-primary" >
            <div className="panel-heading">
              <h1 className="panel-title">Account Information
                <button type="button" onClick={this.setAddAccount.bind(this)} className="btn btn-default btn-xs pull-right">
                  <span className="glyphicon glyphicon-plus primary"/>
                </button>
              </h1>
            </div>

            <AccountNavList accounts={accounts}
                            set={this.setActive.bind(this)}
                            active={active}/>

            <div className="panel-body">
              <ul className="list-group" id="listPersonal">
                <li className="list-group-item"><label>Account Name:</label> {account.accName}
                  <button type="button" onClick={this.setEditing.bind(this)}
                    className="btn btn-primary btn-xs pull-right">Edit
                  </button>
                </li>
                <li className="list-group-item"><label>Start Date:</label> {account.startDate}</li>
                <li className="list-group-item"><label>Start Balance:</label> {account.startBal}</li>
                <li className="list-group-item"><label>Tax:</label> {account.tax}</li>
                <li className="list-group-item"><label>Horizon:</label> {account.horizon}</li>
                <li className="list-group-item"><label>Bias:</label> {account.bias}</li>
              </ul>
              <hr/>

              <PerformanceHistory history={account.performanceHist}
                                  newClient={false}
                                  save={this.addPerformance.bind(this)}/>

              <RemoveAccount display={remove} account={account}
                            cancel={this.cancelEdit.bind(this)}
                            confirm={this.confirmRemove.bind(this)}
                            removeAccount={this.removeAccount.bind(this)}/>
            </div>
          </div>
        </div>
      )}
    else if (newAcc) {
      //New Account from profile page
      return(
        <div className="container-fluid">
          < AddAccount submitBtn={'hidden'} account={null} newClient={false}
                      cancel={this.cancelEdit.bind(this)}
                      save={this.addAccount.bind(this)}/>
        </div>
      )}
    else if (remove) {
      // TODO: Finish remove button
      return(
        <div className="container-fluid">
          <RemoveAccount display={remove} account={account}
                        cancel={this.cancelEdit.bind(this)}
                        confirm={this.confirmRemove.bind(this)}
                        removeAccount={this.removeAccount.bind(this)}/>
        </div>)
    }
    else{
      //Edit existing account from profile page
      return(
        <div className="container-fluid">
         <AddAccount account={account} submitBtn={'visible'}
                     showPerform={'hidden'} newClient={false}
                     cancel={this.cancelEdit.bind(this)}
                     save={this.updateInfo.bind(this)}/>
       </div>
     )}
  }

  render(){

    return(
      <div className="row">
        {this.renderItemEditNew()}
      </div>
    )}
}

export default Account
