import React, {Component} from 'react';
import './App.css';
import User from "./Authentication/User";
// import BgColor from "./ColorCustomizer/BackgroundColor"
//TODO currently clumsy way of dealing with the chrome extension connection error in the local host main page.

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			linkedBook: "", //the current book that is linked to the window
			urlsForLaunch: []
		};
	}

	render() {
		return <div className="App">
			<User/>
		</div>
	}
}

export default App;
