import React, { Component } from 'react';
import AddPerformance from '../Form/AddPerformance'
import PerformanceDropdownList from '../List/PerformanceDropdownList'

class PerformanceHistory extends Component {
  constructor() {
    super()

    this.state = {editing : false,
                  active: 0}
  }

  setEditing(){
    this.setState({editing : true})
  }

  cancelEdit(){
    this.setState({editing : false})
  }

// TODO: Connect to API
  recordPerformance(data){
    // const id = this.props.id
    // const accNum = this.props.accNum

    this.setState({editing : false})
  }

  selectRecord(record){
    console.log("Selected " + record);

  }

  renderItemOrEdit(){
    const editing = this.state.editing
    const active = this.state.active
    const history = this.props.history
    const performance = history[active]

    if (editing) {
     return <AddPerformance save={this.recordPerformance.bind(this)}
                            cancel={this.cancelEdit.bind(this)}/>
    }
    else {
      return (
        <div className="container-fluid">
          <div className="panel panel-primary" >
            <div className="panel-heading">
              <h2 className="panel-title">Performance History
              <button type="button" onClick={this.setEditing.bind(this)} className="btn btn-default btn-xs pull-right">
                <span className="glyphicon glyphicon-plus primary"/>
              </button>
              </h2>
            </div>
            <div className="panel-body">


            <PerformanceDropdownList history={history}
                                    select={this.selectRecord.bind(this)}/>

            <hr/>

              <ul className="list-group" id="listPersonal">
                <li className="list-group-item"><label>Tax:</label> {performance.tax}</li>
                <li className="list-group-item"><label>Horizon:</label> {performance.horizon}</li>
                <li className="list-group-item"><label>Bias:</label> {performance.bias}</li>
                <li className="list-group-item"><label>Begining Balance:</label> ${performance.beginBal}</li>
                <li className="list-group-item"><label>End Balance:</label> ${performance.endBal}</li>
                <li className="list-group-item"><label>Net Return:</label> %{performance.netReturn}</li>
              </ul>

            </div>
          </div>
        </div>
      )
    }
  }

  render(){
    console.log(this.props);
    return(
      <div className="row">
        {this.renderItemOrEdit(this.props.accounts)}
      </div>
  )}
}

export default PerformanceHistory
