import React, { Component } from 'react';


class AddPersonalInfo extends Component {
// TODO: Add Cancel button
  onSave(e){
    e.preventDefault()

    var personal = {
        name: this.refs.name.value,
        dob: this.refs.dob.value,
        address: this.refs.address.value,
        phone: this.refs.phone.value,
        email: this.refs.email.value,
    }
    this.props.save(personal)
  }

  cancelButton(){
    //if new client === true
    if () {
      return(<Link to="/" className="btn btn-danger pull-left"> Cancel </Link>)
    }
    //else new client
    else {
      return(<button onClick={this.onCancel.bind(this)} className="btn btn-danger pull-left"> Cancel </button>)
    }
  }
  
  onCancel(e){
    e.preventDefault()
    this.props.cancel()
  }

  render(){
    var client
    console.log(this.props.client);
    if (this.props.client) {
      client = this.props.client
    }
    else {
      client = {
          name: "",
          dob: "",
          address: "",
          phone: "",
          email: "",
      }
    }


    return(
      <div className="row">
        <div className="container-fluid">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h2 className="panel-title">Personal Information</h2>
            </div>
            <div className="panel-body">
              <form className="form-horizontal">
                <div className="form-group"><label className="col-sm-2 control-label">Name:</label>

                  <div className="col-sm-10">
                    <input type="text" className="form-control" defaultValue={client.name} placeholder="Full Name" ref="name"/>
                  </div>
                </div>

                <div className="form-group"><label className="col-sm-2 control-label">Date of Birth:</label>
                  <div className="col-sm-10">
                    <input type="date" className="form-control" defaultValue={client.dob} placeholder="Date of Birth" ref="dob"/>
                  </div>
                </div>

                <div className="form-group"><label className="col-sm-2 control-label">Address:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" defaultValue={client.address} placeholder="Address" ref="address"/>
                  </div>
                </div>

                <div className="form-group"><label className="col-sm-2 control-label">Phone Number:</label>
                  <div className="col-sm-10">
                    <input type="number" className="form-control" defaultValue={client.phone} placeholder="Phone Number" ref="phone"/>
                  </div>
                </div>

                <div className="form-group"><label className="col-sm-2 control-label">Email:</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" defaultValue={client.email} placeholder="Email" ref="email"/>
                  </div>
                </div>
                {this.cancelButton()}

              <button onClick={this.onSave.bind(this)} className="btn btn-success pull-right"> Save </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddPersonalInfo
