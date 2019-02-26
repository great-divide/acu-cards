import React, { Component } from 'react';
import './App.css';
import ChannelsContainer from './containers/ChannelsContainer'
import About from './components/About'
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar'

export default class App extends Component {

  render() {
    return (
        <div className="App">
          <header> 
            <h2>Welcome to Acu Cards!</h2>
          </header>
          <NavBar />
          <Route exact path='/channels' component={ChannelsContainer} />
          <Route exact path='/about' component={About} />
        </div>
    );
  }
}


