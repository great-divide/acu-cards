import React from 'react';
import Button from 'react-bootstrap/Button';	

const ChannelMenu = (props) =>
	<div>		
		{props.channels.map((channel, index) =>
			<Button key={channel.id} onClick={ () => props.selectPoints(channel.id) }>{channel.name}</Button>
		)}
	</div>

export default ChannelMenu