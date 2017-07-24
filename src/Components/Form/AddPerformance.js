import React, { Component } from 'react';

import AddPerformance from './AddPerformance'


class AddAccount extends Component {

  onSave(e){
    e.preventDefault()
    var begin = this.refs.beginBal.value
    var end = this.refs.endBal.value

    var net = (end - begin) / begin
    var performanceHist : {
            date: this.refs.date.value,
            tax: this.refs.tax.value,
            horizon: this.refs.horizon.value,
            bias: this.refs.bias.value,
            beginBal: begin,
            endBal: end,
            netReturn: net
          }

    this.props.save(performanceHist)
  }

  onCancel(e){
    e.preventDefault();
    this.props.cancel()
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
                      placeholder="Date" ref="date"/>
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

              <button onClick={this.onCancel.bind(this)} className="btn btn-danger pull-left"> Cancel </button>
              <button onClick={this.onSave.bind(this)} className="btn btn-success pull-right"> Save </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddAccount
