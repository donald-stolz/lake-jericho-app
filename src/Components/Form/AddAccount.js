import React, { Component } from 'react';

// import AddPerformance from './AddPerformance'



class AddAccount extends Component {

  onSave(e){
    e.preventDefault()

  }

  onCancel(e){
    e.preventDefault()

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
          performanceHist : [{ performanceRecord }]
        }
    this.props.save(account)
  }

  render(){

    if (this.props.account) {
      const account = this.props.account
    }
    else{
      var account = {
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

    return(

      <div className="row">
        <div className="panel panel-primary" id="financialInformation">
          <div className="panel-heading">
            <h2 className="panel-title">Account Information</h2>
          </div>
          <div className="panel-body">
            <form className="form-horizontal">


              <div className="form-group"><label className="col-sm-2 control-label">Account Name:</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" defaultValue={account.accName}
                      placeholder="Account Name" ref="accName"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Start Date:</label>
                <div className="col-sm-10">
                  <input type="month" className="form-control" defaultValue={account.startDate}
                      placeholder="Start Date" ref="startDate"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Start Balance:</label>
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

              <button onClick={this.onCancel.bind(this)} className="btn btn-danger pull-left"> Cancel </button>
              <button onClick={this.onSave.bind(this)} className="btn btn-primary pull-right"> Save </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddAccount
