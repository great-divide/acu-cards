import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchChannels} from '../actions/channelActions'
import Channel from '../components/Channel'
import Button from 'react-bootstrap/Button';
import {
  Route,
  NavLink
} from 'react-router-dom';

class ChannelsContainer extends Component {

  componentWillMount() {
    this.props.fetchChannels();
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
    fetchChannels: () => dispatch(fetchChannels())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChannelsContainer)