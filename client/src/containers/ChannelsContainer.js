import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPoints} from '../actions/pointActions'
import Channel from '../components/Channel'
import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import {
  Route,
  NavLink
} from 'react-router-dom';

class PointsContainer extends Component {

  componentDidMount() {
    this.props.fetchPoints();
  }

	render(){
		return(
			
			<div>
				Choose a Channel
				<br/>
					<Button variant="light" href="/">Home</Button>
					<Button variant="outline-success" name='Gallbladder' href="/gb" >Gallbladder</Button>
					<Button variant="outline-warning" name='Stomach' href="/st">Stomach</Button>
					<Route exact path="/gb" render={() => <Channel name="Gallbladder" points={this.props.state.points}/>} />
					<Route exact path="/st" render={() => <Channel name="Stomach" points={this.props.state.points}/>} />

			</div>
			
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