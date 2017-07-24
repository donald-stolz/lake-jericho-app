import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home       from './Components/Home'
import NewClient  from './Components/NewClient'
// import Profile    from './Components/Profile'
//

// <Route path="/NewClient" component={NewClient}/>
// <Route path="/Profile/:id" component={Profile}/>


import './App.css';

class App extends Component {

  // constructor(){
  //   super()
  //   this.state = { active : null }
  // }

  render() {

    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Link to="/NewClient"><h1> Lake Jericho </h1></Link>
          </div>
          <Route exact path="/" component={Home}/>
          <Route path="/NewClient" component={NewClient}/>

        </div>
      </Router>
    );
  }
}

export default App;
