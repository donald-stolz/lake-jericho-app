import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HomeListItem from './List/HomeListItem'
// import ClientAPI from '../Data/ClientAPI'
import PropTypes from 'prop-types'

class Home extends Component {
// TODO: Implement Redux
  constructor(props){
    super(props)

		this.props.getList()
		// TODO:
    this.state = {clients : this.props.clients}
  }

  componentMount(){
	// TODO:
    // ClientAPI.setIndex(this.setList.bind(this))
  }

  setList(list){
		// TODO: Remove when implementing Redux
    this.setState({clients : list})
  }

  render() {
		// TODO: Add conditional loading spinner
    let HomeList;
		var plusStyle = {color: '#337ab7', fontSize: '110%'};
    if (this.state.clients) {
      HomeList = this.props.clients.map(client => {
         return(
           <HomeListItem key={client._id}
					 name={client.personal.name}
					 	id={client._id}
					 />
          )
        });
      }
    return(

        <div className="container-fluid">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h2 className="panel-title">Name
              <Link to="/NewClient" className="btn btn-default btn-xs pull-right">
                <strong style={plusStyle}>+</strong>
              </Link>
              </h2>
            </div>
              <ul className="list-group">
                {HomeList}
              </ul>
          </div>
        </div>

    )
  }
}

Home.propTypes = {
	clients: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string,
		"personal.name": PropTypes.string
	})).isRequired,
}

Home.defaultProps = {
	clients: [{
		_id: '0',
		"personal.name": 'No clients'
	}]
}

export default Home;
