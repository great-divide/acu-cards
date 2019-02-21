import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPoints} from '../actions/pointActions'
import Points from '../components/Points'
import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

class PointsContainer extends Component {

  componentDidMount() {
    this.props.fetchPoints();

  }

  handleClick = (event) => {
  	// debugger
  	event.preventDefault();
  	console.log(event.target.name)
  	
  }

  renderPoints = () => {
  	return this.props.state.points.map((p, index) =>
  		<div key={index}>
	  		<p>{p.name}</p>
	  		<img src={p.image_url} alt='' />
			</div>
  	)
  }

	render(){
		return(
			<Router>
			<div>
				Choose a Channel
				<br/>

					<Button variant="outline-success" name='Gallbladder' href='/gb' >Gallbladder</Button>
					<Button variant="outline-warning" name='Stomach' href='/st'>Stomach</Button>
					<Route exact path="/gb" render={() => <Points name="Gallbladder" points={this.props.state.points}/>} />
					<Route exact path="/st" render={() => <Points name="Stomach" points={this.props.state.points}/>} />

			</div>
			</Router>
		)
	}
}

const mapStateToProps = state => {return {state}}

const mapDispatchToProps = dispatch => {
  return{
    fetchPoints: () => dispatch(fetchPoints())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PointsContainer)