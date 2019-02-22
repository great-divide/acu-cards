import React from 'react';
import Button from 'react-bootstrap/Button';	

const ChannelMenu = (props) =>
	<div>		
		{props.channels.map((channel, index) =>
			<Button onClick={ () => props.selectPoints(channel.id) }>{channel.name}</Button>
		)}
	</div>

export default ChannelMenu