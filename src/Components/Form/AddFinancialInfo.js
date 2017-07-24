import React, { Component } from 'react';


class AddFinancialInfo extends Component {

  onSave(e){
    e.preventDefault()

    var financial = {
        annualIncome: this.refs.annualIncome.value,
        totalAssets: this.refs.totalAssets.value,
        liquidAssets: this.refs.liquidAssets.value,
        investmentAssets: this.refs.investmentAssets.value,
        investmentExperience: this.refs.investmentExperience.value,
        overallObjectives: this.refs.overallObjectives.value,
        accounts : null
      }

    this.props.save(financial)
  }

  render(){
    if (this.props.client) {
      const client = this.props.client
    }
    else {
      var client = {
        annualIncome: "",
        totalAssets: "",
        liquidAssets: "",
        investmentAssets: "",
        investmentExperience: "",
        investmentObjectives: ""
      }
    }

    return(
      <div className="row">
        <div className="panel panel-primary" id="financialInformation">
          <div className="panel-heading">
            <h2 className="panel-title">Financial Information</h2>
          </div>
          <div className="panel-body">
            <form className="form-horizontal">
              <div className="form-group"><label className="col-sm-2 control-label">Annual Income: $</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" defaultValue={client.annualIncome}
                      placeholder="Annual Income" ref="annualIncome"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Total Assets:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue={client.totalAssets}
                      placeholder="Total Assets" ref="totalAssets"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Liquid Assets:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue={client.liquidAssets}
                      placeholder="Liquid Assets" ref="liquidAssets"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Investment Assets:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue={client.investmentAssets}
                      placeholder="Investment Assets" ref="investmentAssets"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Investment Experience:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue={client.investmentExperience}
                      placeholder="Investment Experience" ref="investmentExperience"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Overall Objectives:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue={client.overallObjectives}
                      placeholder="Overall Objectives" ref="overallObjectives"/>
                </div>
              </div>


            <button onClick={this.onSave.bind(this)} className="btn btn-success pull-right"> Save </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddFinancialInfo
