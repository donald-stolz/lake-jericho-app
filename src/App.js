import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// TODO: import containers
import HomeContainer       from './Containers/HomeContainer'
import FormContainer  from './Containers/FormContainer'
import ProfileContainer    from './Containers/ProfileContainer'
// TODO: Create header component

import reducer from './Reducers'
import thunk from 'redux-thunk'

// TODO: Add history to Router?

import './App.css';

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {

  render() {
    return (
			<Provider store={store}>
	      <Router>
	        <div className="App">
	          <div className="App-header">
	            <Link to="/"><h1> Lake Jericho </h1></Link>
	          </div>
	          <div className="row">
	            <Route exact path="/" component={HomeContainer}/>
	            <Route path="/NewClient" component={FormContainer}/>
	            <Route path="/Profile/:id" component={ProfileContainer}/>
	          </div>
	        </div>
	      </Router>
			</Provider>
    );
  }
}
