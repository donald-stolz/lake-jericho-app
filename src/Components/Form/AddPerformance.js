import React, { Component } from 'react';

import AddPerformance from './AddPerformance'

var performanceHist : [{
        date: null,
        tax: null,
        horizon: null,
        bias: null,
        beginBal: null,
        endBal: null,
        netReturn: null
      }]

class AddAccount extends Component {

  onSave(e){
    e.preventDefault()

  }

  render(){


    return(
      <div className="row">
        <div className="panel panel-primary" id="financialInformation">
          <div className="panel-heading">
            <h2 className="panel-title">Performance History</h2>
          </div>
          <div className="panel-body">
            <form className="form-horizontal">

              <div className="form-group"><label className="col-sm-2 control-label">Date:</label>
                <div className="col-sm-10">
                  <input type="month" className="form-control" defaultValue={account.date}
                      placeholder="Start Date" ref="startDate"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Tax:</label>
                <div className="col-sm-10">
                  <select className="custom-select form-control" id="inputTax">
                    <option ></option>
                    <option value="Taxable">Taxable</option>
                    <option value="Tax-free">Tax-free</option>
                    <option value="Tax-deffered">Tax-deffered</option>
                  </select>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Horizon:</label>
                <div className="col-sm-10">
                  <select className="custom-select form-control" id="inputHorizon">
                    <option selected></option>
                    <option value="Short">Short</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Long">Long</option>
                  </select>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Bias:</label>
                <div className="col-sm-10">
                  <select className="custom-select form-control" id="inputBias">
                     <option selected></option>
                     <option value="Growth">Growth</option>
                     <option value="Aggregation">Aggregation</option>
                     <option value="Distribution">Distribution</option>
                   </select>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Start Balance:</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" defaultValue={account.startBal}
                      placeholder="Start Balance" ref="startBal"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">End Balance:</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" defaultValue={account.startBal}
                      placeholder="End Balance" ref="endBal"/>
                </div>
              </div>

              <button onClick={this.onSave.bind(this)} className="btn btn-primary pull-right"> Continue </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddAccount

//<button onClick={this.onCancel.bind(this)} className="btn btn-danger pull-left"> Cancel </button>

or Link???


//onCancel(e){
// e.preventDefault();
// this.props.cancel()
//}

//cancelForm()
