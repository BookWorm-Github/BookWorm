import React, {Component} from 'react';
import './App.css';
import User from "./Authentication/User";
//TODO currently clumsy way of dealing with the chrome extension connection error in the local host main page.

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			linkedBook: "" //the current book that is linked to the window
		};
	}

	render() {
		return <div className="App">
			<User/>
		</div>
	}
}

export default App;
