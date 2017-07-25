import React, { Component } from 'react';
import AddAccount from '../Form/AddAccount'
import AccountNavList from '../List/AccountNavList'


class Account extends Component {
  constructor() {
    super()

    this.state = {editing : false,
                  active: 0}
  }

  setEdit(){
    this.setState({editing : true})
  }

  updateInfo(data){

    this.setState({editing : false})
  }

  setActive(accNum){
    console.log(accNum);
    this.setState({active: accNum})
  }

  //               <PerformanceHistory record={account.performanceHist}/>
  renderItemOrEdit(accounts){
    const editing = this.state.editing
    const active =this.state.active
    var account = accounts[active]

    if (editing) {
     return <AddAccount account={account} save={this.updateInfo.bind(this)}/>
    }
    else {
      return (
        <div className="container-fluid">
          <div className="panel panel-primary" id="personalInformation">
            <div className="panel-heading">
              <h2 className="panel-title">Account(s)</h2>
            </div>

            <AccountNavList accounts={accounts}
                            set={this.setActive.bind(this)}
                            active={active}/>

            <div className="panel-body">
              <ul className="list-group" id="listPersonal">
                <li className="list-group-item"><label>Account Name:</label> {account.accName}</li>
                <li className="list-group-item"><label>Start Date:</label> {account.startDate}</li>
                <li className="list-group-item"><label>Start Balance:</label> {account.startBal}</li>
                <li className="list-group-item"><label>Tax:</label> {account.tax}</li>
                <li className="list-group-item"><label>Horizon:</label> {account.horizon}</li>
                <li className="list-group-item"><label>Bias:</label> {account.bias}</li>
              </ul>
              <hr/>

            </div>
          </div>
        </div>
      )
    }
  }

  render(){
    return(
      <div className="row">
        {this.renderItemOrEdit(this.props.accounts)}
      </div>
    )}
}

export default Account
