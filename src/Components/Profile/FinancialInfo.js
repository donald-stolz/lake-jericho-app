import React, { Component } from 'react';
import AddFinancialInfo from '../Form/AddFinancialInfo'

class FinancialInfo extends Component {
  constructor() {
    super()

    this.state = {editing : false}
  }

  setEdit(){
    this.setState({editing : true})
  }

  updateInfo(data){

    this.setState({editing : false})
  }

  renderItemOrEdit(){
    var editing = this.state.editing
    const client = this.props.client

    if (editing) {
     return <AddFinancialInfo client={this.state.client} save={this.updateInfo.bind(this)}/>
    } else {
      return (
        <div className="container-fluid">
          <div className="panel panel-primary" id="FinancialInformation">
            <div className="panel-heading">
              <h2 className="panel-title">Financial Information</h2>
            </div>
            <div className="panel-body">
              <ul className="list-group" id="listFinancial">
                <li className="list-group-item"><label>Annual Income:</label> ${client.annualIncome}</li>
                <li className="list-group-item"><label>Total Assets:</label> {client.totalAssets}</li>
                <li className="list-group-item"><label>Liquid Assets</label> {client.liquidAssets}</li>
                <li className="list-group-item"><label>Investment Assets:</label> {client.investmentAssets}</li>
                <li className="list-group-item"><label>Investment Experience:</label> {client.investmentExperience}</li>
                <li className="list-group-item"><label>Overall Objectives:</label> {client.overallObjectives}</li>
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
