import React, { Component } from 'react';


class AddPersonalInfo {

  onSave(e){
    e.preventDefault()

    var personal = {
        name: this.refs.name.value,
        dob: this.refs.dob.value,
        address: this.refs.address.value,
        phone: this.refs.phone.value,
        email: this.refs.email.value,
    }
    this.props.onSave(personal)
  }

  render(){
    const client = this.props.client

    return(
      <div className="row">
        <div className="container-fluid">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h2 className="panel-title">Personal Information</h2>
            </div>
            <div className="panel-body">
              <ul className="list-group" >
                <li className="list-group-item"><label>Name:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" defaultValue={client.name} placeholder="Full Name" ref="clientName">
                  </div>
                </li>

                <li className="list-group-item"><label>Date of Birth:</label>
                  <div className="col-sm-10">
                    <input type="date" className="form-control" defaultValue={client.dob} placeholder="Date of Birth" ref="dob">
                  </div>
                </li>

                <li className="list-group-item"><label>Address:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" defaultValue={client.address} placeholder="Address" ref="address">
                  </div>
                </li>

                <li className="list-group-item"><label>Phone Number:</label>
                  <div className="col-sm-10">
                    <input type="number" className="form-control" defaultValue={client.phone} placeholder="Phone Number" ref="phone">
                  </div>
                </li>

                <li className="list-group-item"><label>Email:</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" defaultValue={client.email} placeholder="Email" ref="email">
                  </div>
                </li>
              </ul>
              <button onClick={this.onSave.bind(this)} className="btn btn-primary"> Continue </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
