import React, { Component } from 'react';
import AddAccount from '../Form/AddAccount'
import AccountNavList from '../List/AccountNavList'
import PerformanceHistory from './PerformanceHistory'

class Account extends Component {
  constructor() {
    super()

    this.state = {editing : false,
                  newAcc  :false,
                  active: 0}
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
    const active = this.state.active
    var accounts = []
    accounts = this.props.accounts
    data.accNum = accounts[active].accNum
    data.performanceHist = accounts[active].performanceHist
    accounts[active] = data

    this.props.update(accounts)
    this.setState({editing : false})
  }

  addAccount(){
    console.log("Add Account new account from profile page");
  }

  cancelEdit(){
    this.setState({editing : false})
    this.setState({newAcc : false})
  }

  addPerformance(data){
    const active = this.state.active
    var accounts = []

    accounts = this.props.accounts
    accounts[active].performanceHist = data

    this.props.update(accounts)
    this.setState({editing : false})
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

    var account = accounts[active]

    /* Display cases:
        1) Display saved values of selected account
        2) Create a brand new account
        3) Edit the data of an existing account
    */
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

            </div>
          </div>
        </div>
      )}
    else if (newAcc) {
      //New Account from profile page
      return(
        <div className="container-fluid">
          < AddAccount btn={'hidden'} account={null} newClient={false}
                      cancel={this.cancelEdit.bind(this)}
                      save={this.addAccount.bind(this)}/>
        </div>
      )}
    else {
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
