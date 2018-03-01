import React, { Component } from 'react';
import AddFinancialInfo from '../form/old/AddFinancialInfo'

class FinancialInfo extends Component {
  constructor() {
    super()
    this.state = {editing : false}
  }
  // Methods for changing edit state
  setEditing(){this.setState({editing : true})}
  cancelUpdate(){this.setState({editing : false})}

  // Sends updated info to parent class and changes editing to false
  updateInfo(data){
    this.props.update(data)
    this.setState({editing : false})
  }

  renderItemOrEdit(){
    var editing = this.state.editing
    const client = this.props.client

    if (editing) {
     return(
       <div className="container-fluid">
         <AddFinancialInfo client={client}
            newClient={false}
            save={this.updateInfo.bind(this)}
            cancel={this.cancelUpdate.bind(this)}
          />
        </div>
      )
    } else {

      return (
        <div className="container-fluid">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h1 className="panel-title">Financial Information</h1>
            </div>
            <div className="panel-body">
              <ul className="list-group" id="listFinancial">
                <li className="list-group-item"><label>Annual Income:</label> ${client.annualIncome}
                  <button type="button" onClick={this.setEditing.bind(this)}
                    className="btn btn-primary btn-xs pull-right">Edit
                  </button>
                </li>
                <li className="list-group-item"><label>Total Assets: $</label> {client.totalAssets}</li>
                <li className="list-group-item"><label>Liquid Assets: $</label> {client.liquidAssets}</li>
                <li className="list-group-item"><label>Investment Assets: $</label> {client.investmentAssets}</li>
                <li className="list-group-item"><label>Investment Experience:</label> {client.investmentExperience}</li>
                <li className="list-group-item"><label>Overall Objectives:</label> {client.overallObjectives}</li>
                <li className="list-group-item"><label>Time horizon:</label> {client.timeHorizon}</li>
                <li className="list-group-item"><label>Tax Considerations:</label> {client.taxConsids}</li>
                <li className="list-group-item"><label>Liquid Considerations:</label> {client.liquidConsids}</li>
                <li className="list-group-item"><label>Legal/Regulatry Issues:</label> {client.regulatoryIssues}</li>
                <li className="list-group-item"><label>Unique Circumstances:</label> {client.unique}</li>
                <li className="list-group-item"><label>Return Objective:</label> {client.returnObjectives}</li>
                <li className="list-group-item"><em><h4 className="text-center">Risk Objectives</h4></em></li>
                <li className="list-group-item"><label> (1) Ability: </label> {client.riskAbility}</li>
                <li className="list-group-item"><label> (2) Willingness: </label>{client.riskWillingness}</li>
                <li className="list-group-item"><label> (3) Overall: </label> {client.riskOverallAbility}</li>
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

export default FinancialInfo
//NOTE: Consider using CSS to change font size and styling for Risk Objectives
