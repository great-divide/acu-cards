import React, { Component } from 'react';
import About from './components/About'
import './App.css';
import ChannelsContainer from './containers/ChannelsContainer'
import {
  Route,
  NavLink,
  NavBar
} from 'react-router-dom';




export default class App extends Component {


  render() {

    return (

        <div className="App">
          <React.Fragment>
            <Route exact path="/points/home" />
            <Route exact path="/about" component={About} />
            <ChannelsContainer />
          </React.Fragment>
        </div>

    );
  }
}


