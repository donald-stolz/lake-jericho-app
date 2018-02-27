import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        timeHorizon: this.refs.timeHorizon.value,
        taxConsids: this.refs.taxConsids.value,
        liquidConsids: this.refs.liquidConsids.value,
        regulatoryIssues: this.refs.regulatoryIssues.value,
        unique: this.refs.unique.value,
        returnObjectives: this.refs.returnObjectives.value,
        riskAbility: this.refs.riskAbility.value,
        riskWillingness: this.refs.riskWillingness.value,
        riskOverallAbility: this.refs.riskOverallAbility.value
      }

    this.props.save(financial)
  }

  onCancel(e){
    e.preventDefault()
    this.props.cancel()
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

  render(){
    var client
    if (this.props.client) {
      client = this.props.client
    }
    else {
      client = {
        annualIncome: "",
        totalAssets: "",
        liquidAssets: "",
        investmentAssets: "",
        investmentExperience: "",
        investmentObjectives: ""
      }
    }

    return(
      <div className="container-fluid">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">Financial Information</h1>
          </div>
          <div className="panel-body">
            <form className="form-horizontal">
              <div className="form-group"><label className="col-sm-2 control-label">Annual Income: $</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" defaultValue={client.annualIncome}
                      placeholder="Annual Income" ref="annualIncome"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Total Assets: $</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" defaultValue={client.totalAssets}
                      placeholder="Total Assets" ref="totalAssets"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Liquid Assets: $</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" defaultValue={client.liquidAssets}
                      placeholder="Liquid Assets" ref="liquidAssets"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Investment Assets: $</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" defaultValue={client.investmentAssets}
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

              <div className="form-group"><label className="col-sm-2 control-label">Time Horizon:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue={client.timeHorizon}
                      placeholder="Time Horizon" ref="timeHorizon"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Tax Considerations:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue={client.taxConsids}
                      placeholder="Tax Considerations" ref="taxConsids"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Liquidity Concerns:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue={client.liquidConsids}
                      placeholder="Liquidity Concerns" ref="liquidConsids"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Legal/Regulatry Issues:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue={client.regulatoryIssues}
                      placeholder="Legal/Regulatry Issues" ref="regulatoryIssues"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Unique Circumstances:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue={client.unique}
                      placeholder="Unique Circumstances" ref="unique"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Return Objective:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue={client.returnObjectives}
                      placeholder="Return Objective" ref="returnObjectives"/>
                </div>
              </div>

              <div className="row">
	              <em><h4 className="text-center">Risk Objectives</h4></em>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Ability:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue={client.riskAbility}
                      placeholder="Ability" ref="riskAbility"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Willingness:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue={client.riskWillingness}
                      placeholder="Willingnes" ref="riskWillingness"/>
                </div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">Overall:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue={client.riskOverallAbility}
                      placeholder="Overall" ref="riskOverallAbility"/>
                </div>
              </div>

            {this.cancelButton()}
            <button onClick={this.onSave.bind(this)} className="btn btn-success pull-right"> Save </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddFinancialInfo
