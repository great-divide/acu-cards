import React, { Component } from 'react';

import './App.css';
import ChannelsContainer from './containers/ChannelsContainer'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  NavBar
} from 'react-router-dom';
// import Channel from './components/Channel'



export default class App extends Component {


  render() {

    return (
      <Router>
        <div className="App">
        <Route exact path="/points/home">
          <ChannelsContainer />
          </Route>
        </div>
      </Router>
    );
  }
}


