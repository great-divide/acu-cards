import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PointBack = (props) =>
	<div>	
		<Container>
			<br/>
				<Row>
					<Col><h6>{props.point.location}</h6></Col>
					<Col><img src={props.point.image_url} alt='' /></Col>
				</Row>
		</Container>
	</div>

export default PointBack