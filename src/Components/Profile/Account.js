import React, { Component } from 'react';
import AddAccount from '../Form/AddPersonalInfo'
// import Performance from './Performance'
// <Performance performance={account.performanceHist[active]}

class Account extends Component {
  constructor() {
    super()

    this.state = {editing : false,
                  active: 0}
  }

  setEdit(){
    this.setState({editing : true})
  }

// TODO: Connect to API
  updateInfo(data){

    this.setState({editing : false})
  }

  renderItemOrEdit(){
    const editing = this.state.editing
    const account = this.props.account
//  const active =this.state.active
    if (editing) {
     return <AddAccount account={account} save={this.updateInfo.bind(this)}/>
    }
    else {
      return (
        <div className="container-fluid">
          <div className="panel panel-primary" id="personalInformation">
            <div className="panel-heading">
              <h2 className="panel-title">Personal Information</h2>
            </div>
            <div className="panel-body">
              <ul className="list-group" id="listPersonal">
                <li className="list-group-item"><label>Account Name:</label> {account.accName}</li>
                <li className="list-group-item"><label>Start Date:</label> {account.dob}</li>
                <li className="list-group-item"><label>Start Balance:</label> {account.startBal}</li>
                <li className="list-group-item"><label>Tax:</label> {account.tax}</li>
                <li className="list-group-item"><label>Horizon:</label> {account.horizon}</li>
                <li className="list-group-item"><label>Bias:</label> {account.bias}</li>
              </ul>

            </div>
          </div>
        </div>
      )
    }
  }

  render(){
    return(
      <div className="row">
        {this.renderItemOrEdit()}
      </div>
    )}
}

export default Account
