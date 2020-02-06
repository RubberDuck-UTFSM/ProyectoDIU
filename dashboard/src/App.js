import React from 'react';
import logo from './logo.svg';
import Navbar from './Layout/Navbar.js'
import SideBar from './Layout/SideBar.js'
import './Layout/bootstrap.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
   		<Navbar></Navbar>
   		<div className="container-fluid">
			<SideBar></SideBar>
   		</div>
    </React.Fragment>
  );
}

export default App;
