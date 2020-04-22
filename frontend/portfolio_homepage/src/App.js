 /*global chrome*/

import React, { Component } from 'react';
import './App.css';
import User from "./Authentication/User";
import BgColor from "./ColorCustomizer/BackgroundColor"
//TODO currently clumsy way of dealing with the chrome extension connection error in the local host main page.

class App extends Component{

	constructor(props) {
		super(props);
		this.state = {
			linkedBook: "", //the current book that is linked to the window
			urlsForLaunch:[],
			urlsForWormhole:[]
		};

		// //TODO move the chrome runtime stuff and their callback fns to somewhere more suitable
		chrome.runtime.sendMessage({rq: "urlsForLaunch"}, this._cbForLaunchResponse);
		chrome.runtime.sendMessage({rq: "urlsForWormhole"}, this._cbForWormholeResponse);
		this.handleMessage.bind(this);
	}

	componentDidMount(){
	
		chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
	}
	
	handleMessage(message, sender, sendResponse){
		console.log("App.js got response from background.js")
		if(message.urlsForLaunch != null){
			console.log("App.js got launch urls from background")
	
			this.setState({urlsForLaunch: message.urlsForLaunch})
		}
		if(message.urlsForWormhole != null){
			console.log("App.js got launch wormhole from background")
			this.setState({urlsForWormhole: message.urlsForWormhole})
	
		}
	}
	
	
	_cbForLaunchResponse = (response) => {
	
		this.setState({urlsForLaunch: response.urlsForLaunch})
	
	}
	
	_cbForWormholeResponse = (response) => {
	
		this.setState({urlsForWormhole: response.urlsForWormhole})
	
	}


	render(){
		return <div className="App">
			<BgColor />
			
			<User/>
			{/*<h2>URLs for Wormhole</h2>*/}
			{/*<ul>*/}
			{/*	{ this.state.urlsForWormhole.map(title => <li>{title}</li>)}*/}
			{/*</ul>*/}

			{/*<h2>URLs for Launch</h2>*/}
			{/*<ul>*/}
			{/*	{ this.state.urlsForLaunch.map(title => <li>{title}</li>)}*/}
			{/*</ul>*/}

		</div>
	}
}

export default App;
