import React, { Component } from 'react';
import AddAccount from '../Form/AddAccount'
import AccountNavList from '../List/AccountNavList'
import PerformanceHistory from './PerformanceHistory'


class Account extends Component {
  constructor() {
    super()

    this.state = {editing : false,
                  active: 0}
  }

  setEditing(){
    this.setState({editing : true})
  }

  updateInfo(data){
    // console.log(data);
    const active = this.state.active
    var accounts = []
    accounts = this.props.accounts
    data.accNum = accounts[active].accNum
    data.performanceHist = accounts[active].performanceHist
    accounts[active] = data

    // console.log(accounts);
    this.props.update(accounts)
    this.setState({editing : false})
  }

  cancelEdit(){
    this.setState({editing : false})
  }

  addPerformance(data){
    const active = this.state.active
    var accounts = []
    accounts = this.props.accounts
    accounts[active].performanceHist = data
    // console.log(accounts);
    this.props.update(accounts)
    this.setState({editing : false})
  }

  setActive(accNum){
    this.setState({active: accNum})
  }

  renderItemOrEdit(){
    const accounts = this.props.accounts
    const editing = this.state.editing
    const active =  this.state.active
    // console.log(accounts);
    var account = accounts[active]


    if (editing) {
     return(
       <div className="container-fluid">
        <AddAccount account={account}
                    cancel={this.cancelEdit.bind(this)}
                    save={this.updateInfo.bind(this)}/>
      </div>
    )}
    else {
      // console.log(account);
      return (
        <div className="container-fluid">
          <div className="panel panel-primary" >
            <div className="panel-heading">
              <h2 className="panel-title">Account(s)</h2>
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
      )
    }
  }

  render(){
    // console.log(this.props);
    return(
      <div className="row">
        {this.renderItemOrEdit()}
      </div>
    )}
}

export default Account
