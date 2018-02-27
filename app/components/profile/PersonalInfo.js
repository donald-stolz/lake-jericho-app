import React, { Component } from 'react';
import PersonalForm from '../form/PersonalForm'

class PersonalInfo extends Component {
  constructor() {
    super()
    this.state = {editing : false}
  }

  // Methods for changing edit state
  setEditing(){this.setState({editing : true})}
  cancelUpdate(){this.setState({editing : false})}

  updateInfo(data){
    // Sends updated info to parent class and changes editing to false
    this.props.update(data)
    this.setState({editing : false})
  }

  renderItemOrEdit(){
    var editing = this.state.editing
    var client = this.props.client

    if (editing) {
     return (
        <div className="container-fluid">
          <PersonalForm client={client}
              newClient={false}
              save={this.updateInfo.bind(this)}
              cancel={this.cancelUpdate.bind(this)}
          />
        </div>
      )
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
                <li className="list-group-item"><label>Name:</label> {client.name}
                  <button type="button" onClick={this.setEditing.bind(this)}
                    className="btn btn-primary btn-xs pull-right">Edit
                  </button>
                </li>
                <li className="list-group-item"><label>Date of Birth:</label> {client.dob}</li>
                <li className="list-group-item"><label>Address:</label> {client.address}</li>
                <li className="list-group-item"><label>Phone Number:</label> {client.phone}</li>
                <li className="list-group-item"><label>Email:</label> {client.email}</li>
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

export default PersonalInfo
