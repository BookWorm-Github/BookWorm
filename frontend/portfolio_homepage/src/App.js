import React, { Component } from 'react';
import './App.css';
import User from "./Authentication/User";
//TODO currently clumsy way of dealing with the chrome extension connection error in the local host main page.

class App extends Component{
	render(){
		  return (
			<div className="App">
				<User/>
			</div>
		  )
	}
}

export default App;
