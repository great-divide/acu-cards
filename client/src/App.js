import React, { Component } from 'react';

import './App.css';
import PointsContainer from './containers/PointsContainer'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Points from './components/Points'



export default class App extends Component {


  render() {

    return (
   
          <div className="App">

            <PointsContainer />
            
            

          </div>

    );
  }
}


