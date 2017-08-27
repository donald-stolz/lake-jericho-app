import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddPerformance from './AddPerformance'

// TODO: Create comment/log section for changes

class AddAccount extends Component {

  onSave(e){
    e.preventDefault()
    var account = {
          accNum: null,
          accName: this.refs.accName.value,
          startBal: this.refs.startBal.value,
          startDate: this.refs.startDate.value,
          tax: this.refs.tax.value,
          horizon: this.refs.horizon.value,
          bias: this.refs.bias.value,
          performanceHist : []
        }
    this.props.save(account)
  }

  cancelButton(){
    //if new client === true
    if (this.props.newClient) {
      return(<Link to="/" className="btn btn-danger pull-left"> Cancel </Link>)
    }
    //else new client
    else {
      return(<button onClick={this.onCancel.bind(this)} className="btn btn-danger pull-left"> Cancel </button>)
    }
  }

  onCancel(e){
    e.preventDefault()
    this.props.cancel()
  }

  addAccount(performanceRecord){
    var account = {
          accNum: null,
          accName: this.refs.accName.value,
          startBal: this.refs.startBal.value,
          startDate: this.refs.startDate.value,
          tax: this.refs.tax.value,
          horizon: this.refs.horizon.value,
          bias: this.refs.bias.value,
          performanceHist : []
        }
    account.performanceHist.push(performanceRecord)
    this.props.save(account)
  }

  render(){
    var account
    // If new account is from Form account prop is undefined
    // If account prop is false - new account is being added from profile page
    if (this.props.account) {
      account = this.props.account
    }
    else{
      account = {
            accNum: "",
            accName: "",
            startBal: "",
            startDate: "",
            tax: "",
            horizon: "",
            bias: "",
            performanceHist : [{
              date: "",
              tax: "",
              horizon: "",
              bias: "",
              beginBal: "",
              endBal: "",
              netReturn: ""
            }]
          }
    }

    //Conditional visibility for performance history when updating
    var profile
    var form
    if(this.props.btn){
      profile = {visibility: this.props.btn}
      form = {visibility : 'visible'}
    }
    else{
      profile = {visibility : 'visible'}
      form = {visibility : 'hidden'}
    }
    return(

      <div className="row">
      <div className="container-fluid">
        <div className="panel panel-primary" id="financialInformation">
          <div className="panel-heading">
            <h2 className="panel-title">Account Information</h2>
          </div>
          <div className="panel-body">
            <form className="form-horizontal">


              <div className="form-group"><label className="col-sm-2 control-label">Account Name:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue={account.accName}
                      placeholder="Account Name" ref="accName"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Start Date:</label>
                <div className="col-sm-10">
                  <input type="month" className="form-control" defaultValue={account.startDate}
                      placeholder="Start Date" ref="startDate"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Start Balance: $</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" defaultValue={account.startBal}
                      placeholder="Start Balance" ref="startBal"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Tax:</label>
                <div className="col-sm-10">
                  <select className="custom-select form-control" defaultValue={account.tax} ref="tax">
                    <option ></option>
                    <option value="Taxable">Taxable</option>
                    <option value="Tax-free">Tax-free</option>
                    <option value="Tax-deffered">Tax-deffered</option>
                  </select>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Horizon:</label>
                <div className="col-sm-10">
                  <select className="custom-select form-control" defaultValue={account.horizon} ref="horizon">
                    <option ></option>
                    <option value="Short">Short</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Long">Long</option>
                  </select>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Bias:</label>
                <div className="col-sm-10">
                  <select className="custom-select form-control" defaultValue={account.bias} ref="bias">
                     <option ></option>
                     <option value="Growth">Growth</option>
                     <option value="Aggregation">Aggregation</option>
                     <option value="Distribution">Distribution</option>
                   </select>
                </div>
              </div>
              <div className="container-fluid">
                {this.cancelButton()}
                <button style={profile} onClick={this.onSave.bind(this)} className="btn btn-primary pull-right"> Save </button>
              </div>
            </form>
            <hr/>
            <div style={form}>< AddPerformance newClient={true} save={this.addAccount.bind(this)}/></div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default AddAccount
