import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashPoints from '../components/DashPoints'

export default class DashContainer extends Component {

	render() {
		return(
			<div>
				Dash Container!
				<DashContainer />
			</div>
		)
	}
}