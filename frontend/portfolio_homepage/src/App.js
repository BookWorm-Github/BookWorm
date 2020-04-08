 /*global chrome*/
import React, { Component } from 'react';
import './App.css';

import BookAppMain from './books/BookAppMain';
// import {getCurrentTab} from "./experiment/common/Utils";
//TODO currently clumsy way of dealing with the chrome extension connection error in the local host main page.

class App extends Component{
    constructor() {
        super();
        this.state = {
        	urlsForWormhole:[]
        };
        chrome.runtime.sendMessage({rq: "Tabs"}, this._callbackForURLResponse);
		

    }


    componentDidMount() {
        
		this.experiment()
		//   this.setState({
		// 	urlsForWormhole: response.urlsForWormhole
			// });
		// })
		// console.log("App state is "+this.state.urlsForWormhole.toString());
    }
    
  	_callbackForURLResponse = (response) => {
			
		  console.log("Currently opened tabs in app in chrome runtime are "+response.openTabs);
		  console.log("URLs for wormhole in app in chrome runtime are "+response.urlsForWormhole);

			this.setState({urlsForWormhole: response.openTabs})
			console.log("In callback App urlsForWormhole state is "+this.state.urlsForWormhole.toString());

		}
	experiment = ()=>{

		chrome.runtime.sendMessage({rq: "Tabs"}, this._callbackForURLResponse);
		
		chrome.runtime.onMessage.addListener(
		  (response, sender, sendResponse) => {
		      if(response.urlsForWormhole != null){
		      	console.log("Got URLs for wormhole in App.js from background")
		      }
		      else{
		      	console.log("Got msg in App.js from background but it was unexpected: "+response)
		      }

		  });
	}
	render(){

		  return <div className="App">
		    		<h1>BookWorm</h1>
		    		<button onClick = {this.experiment}>Experiment</button>

		    		<h2>URLs for wormhole</h2>
					<ul>
        			{ this.state.urlsForWormhole.map(title => <li>{this.state.urlsForWormhole}</li>)}
      				</ul>
		    		<BookAppMain />
		    	</div> 
	}



} 

export default App;
