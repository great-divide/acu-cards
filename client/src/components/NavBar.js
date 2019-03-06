import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => 

		<Navbar sticky="top" bg="light" variant="light">
			<Nav.Link href="/">Home</Nav.Link>
			<Nav.Link href="/about">About</Nav.Link>
			<Nav.Link href="/channels">Channels</Nav.Link>			
		</Navbar>

export default NavBar