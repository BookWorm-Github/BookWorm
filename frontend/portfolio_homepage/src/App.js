import React, { Component } from 'react';
import './App.css';
import UserProvider from "./Authentication/UserProvider";
import Application from "./Authentication/Application";
//TODO currently clumsy way of dealing with the chrome extension connection error in the local host main page.

class App extends Component{
	render(){
		  return (
			<div className="App">

				<UserProvider>
					<Application />
				</UserProvider>
			</div>
		  )
	}
}

export default App;
