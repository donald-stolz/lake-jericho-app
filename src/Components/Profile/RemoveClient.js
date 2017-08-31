import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ClientAPI  from '../../Data/ClientAPI'


class RemoveClient extends Component {
  /* Required props:
      Cancel call
      Remove call
      Confirm bool

    The remove button is rendered at the bottom of the profile page,
      until it is clicked and changes to the confrimation button.
      The confirmation button will be contidonally rendered on profile.
      When it is clicked, the confirmation box is the only component rendered.
  */
  constructor(props){
    super(props)

    this.state = {remove : props.confirm}
  }

  confirm(e){
    e.preventDefault()

    this.props.removeClient()
  }

  cancel(e){
    e.preventDefault()
    // Set state back to false
    this.setState({remove : false})
    this.props.cancel()
  }

  removeButton(){
    // If clicked set to confirm
    const remove = this.state.remove

    if (!remove) {
      return(
        <button onClick={this.confirm.bind(this)}
                type="button"
                className="btn btn-danger btn-block">Remove Client</button>
      )
    }
    else {
      return(
        <div className="container-fluid">
          <button onClick={this.cancel.bind(this)}type="button" className="btn btn-primary btn-block">Cancel</button>
          <Link to="/" type="button" className="btn btn-danger btn-block">Remove from Database</Link>
        </div>)
    }
  }

  componentWillUnmount(){
    if (this.state.remove) {
      ClientAPI.removeClient(this.props.id)
    }
  }

  render() {

    return (
      <div>
        {this.removeButton()}
      </div>
      );
  }
}

export default RemoveClient;
