import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchChannels} from '../actions/channelActions'
import {fetchPoints} from '../actions/pointActions'
import ChannelMenu from '../components/ChannelMenu'
import PointsContainer from './PointsContainer'


class ChannelsContainer extends Component {
	constructor() {
		super();

		this.state = {
			currentPoints: []
		}

		this.setCurrentPoints = this.setCurrentPoints.bind(this)
		this.renderPoints = this.renderPoints.bind(this)
	}

  componentWillMount() {
    this.props.fetchChannels();
    this.props.fetchPoints()
  }

  setCurrentPoints(channelId) {
		const currentPoints = this.props.state.points.filter(points => points.channel_id === channelId)
		this.setState({currentPoints: currentPoints})

	}

	renderPoints() {
		const points = this.state.currentPoints
		return points.map((p, index) => <PointsContainer point={p} key={index} />
		)
	}

	render(){
		return(		
			<div>
				<ChannelMenu channels={this.props.state.channels} setCurrentPoints={ this.setCurrentPoints } />
				{this.renderPoints()}
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
