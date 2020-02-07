import React from 'react';
import './bootstrap.css';
import './Layout.css';

import Navbar from './Navbar.js';

class Layout extends React.Component {
	render = () => {
		return (
			<div className="container-fluid">
				<Navbar></Navbar>
			</div>	
		);
	};
}

export default Layout;