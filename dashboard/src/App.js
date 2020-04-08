import React from "react";
import AppLayout from "./Layout/AppLayout.js";

import Login from "./Components/Login.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/panel/login">
					<Login />
				</Route>
				<Route path="/panel">
					<AppLayout></AppLayout>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
