import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchChannels} from '../actions/channelActions'
import {fetchPoints} from '../actions/pointActions'
import Channel from '../components/Channel'
import ChannelMenu from '../components/ChannelMenu'
import PointsContainer from './PointsContainer'

import {
  Route,
  NavLink
} from 'react-router-dom';

class ChannelsContainer extends Component {
	constructor() {
		super();

		this.state = {
			currentPoints: []
		}

		this.selectPoints = this.selectPoints.bind(this)
		this.renderPoints = this.renderPoints.bind(this)
	}

  componentWillMount() {
    this.props.fetchChannels();
    this.props.fetchPoints()
  }

  selectPoints(channelId) {
		const currentChannel = this.props.state.channels.find(function(channel) {return channel.id === channelId});
		const currentPoints = this.props.state.points.filter(points => points.channel_id === channelId)
		this.setState({currentPoints: currentPoints})

	}

	renderPoints() {
		const points = this.state.currentPoints
		debugger
		return points.map((p, index) => <PointsContainer point={p} key={index} />
		)
	}

	render(){
		return(		
			<div>
				<ChannelMenu channels={this.props.state.channels} selectPoints={ this.selectPoints } />
				{this.renderPoints}
			</div>
		)
	}
}


const mapStateToProps = state => { return {state} }

const mapDispatchToProps = dispatch => {
  return{
    fetchChannels: () => dispatch(fetchChannels()),
    fetchPoints: () => dispatch(fetchPoints())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChannelsContainer)

  // renderPoints = () => {
  //   let filteredPoints = this.props.points.filter(el => el.channel === this.props.name)
  //   return filteredPoints.map((p, index) => 
  //     <PointsContainer point={p} key={index} />
  //   )
  // }

					// <Button variant="outline-success" name='Gallbladder' href="/gb" >Gallbladder</Button>
					// <Button variant="outline-warning" name='Stomach' href="/st">Stomach</Button>
					// <Route exact path="/gb" render={() => <Channel name="Gallbladder" points={this.props.state.points}/>} />
					// <Route exact path="/st" render={() => <Channel name="Stomach" points={this.props.state.points}/>} />