import React, { Component } from 'react';
import { connect } from 'react-redux';
import P from '../components/Points'

class PointsContainer extends Component {

	render(){
		return(
			<div>
				<Points />
			</div>
		)
	}
}