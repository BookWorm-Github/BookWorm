/*global chrome*/

import React, { Component } from 'react';
import './App.css';


import BookAppMain from './books/BookAppMain';
// import {getCurrentTab} from "./experiment/common/Utils";
//TODO currently clumsy way of dealing with the chrome extension connection error in the local host main page.

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
        	connectedToChrome: false,

	    };
    }
    componentDidMount(){
    	this.setState({connectedToChrome: (chrome.tabs!=undefined&&chrome.tabs!=null)});
    	if(this.state.connectedToChrome){
		    chrome.tabs.query({active: true, currentWindow: true}, tabs =>{
		      console.log("The URL of this tab is "+tabs[0].url);
		    })
		}
	}

	render(){

		  return (<div>{/*if this is connected to chrome, render page. else return empty div (which our extension would cover up)*/
		  		this.state.connectedToChrome?
		    	<div className="App">
		    		<h1>BookWorm</h1>
		    		<BookAppMain />
		    	</div> 
		    	:
		    	<div></div>
			}</div>
		  );
	}


} 

export default App;
