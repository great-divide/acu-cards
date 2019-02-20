import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchPoints} from './actions/pointActions'
import './App.css';
import DashContainer from './containers/DashContainer'


class App extends Component {

  componentDidMount() {
    this.props.fetchPoints();
  }
  // state = {
  //   point: ''
  // }


  // componentDidMount = () => {
  //   fetch('./points/1', {
  //     method: 'GET',
  //   }).then(response => response.json())
  //   .then(resp => this.setState({
  //     point: resp
  //   }))
  // }



  render() {
    // const point = this.state.point
    return (
      <div className="App">
        <DashContainer />
        <p>{this.state}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {return {state}}

const mapDispatchToProps = dispatch => {
  return{
    fetchPoints: () => dispatch(fetchPoints())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
