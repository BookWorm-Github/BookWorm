/*global chrome*/

import React, { Component } from 'react';
import './App.css';
import URLDisplay from './url_display/CurrentURLs'

import BookAppMain from './books/BookAppMain';
// import {getCurrentTab} from "./experiment/common/Utils";
//TODO currently clumsy way of dealing with the chrome extension connection error in the local host main page.

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
        	connectedToChrome: false,
        	openTabs: []
	    };

    	this.handleMessage.bind(this);
    }
    handleMessage(message, sender, sendResponse){
			    console.log("content script received msg ("+message+") from background sender "+sender);
			      if(message.openTabs != null){
			        console.log("Content got message from background: "+message.openTabs);
			        // openTabs = message.openTabs;
			        this.setState({openTabs: message.openTabs})
			        // createListOfURLs(openTabs);
			        console.log("app openTabs state is now "+this.state.openTabs);
			      }
			      else{
			        console.log("content got that Message was null")
			      }

	}
	componentWillUnmount() {
   // Remove listener when this component unmounts
   chrome.runtime.onMessage.removeListener(this.handleMessage);
  }


    componentDidMount(){
    	this.setState({connectedToChrome: (chrome.tabs!=undefined&&chrome.tabs!=null)});
    	if(this.state.connectedToChrome){
		    chrome.tabs.query({active: true, currentWindow: true}, tabs =>{
		      console.log("The URL of this tab is "+tabs[0].url);
		    });

			chrome.runtime.onMessage.addListener(this.handleMessage);
		    
		}
	}

	render(){
		console.log("Render openTabs length is "+this.state.openTabs.length);
		
		  return (<div>

		  	{/*if this is connected to chrome, render page. else return empty div (which our extension would cover up)*/
		  		this.state.connectedToChrome?

		    	<div className="App">

		  	<button onClick={this.getOpenTabs}>Get Opened Tabs</button> 
		    		<h1>BookWorm</h1>
		    		<BookAppMain />
		    	</div> 
		    	:
		    	<div></div>
			}

			</div>
		  );
	}

	// getopenTabs = () =>{
	// 	chrome.runtime.sendMessage({rq: "Tabs"}, (response)=>{
	// 		console.log("App got reponse "+response.openTabs)
	// 	});
	// }

	getOpenTabs = () =>{
	   chrome.tabs.query({},(tabs) =>{
	      console.log("\nIn App, getting tabs/////////////////////\n");
	      tabs.forEach(function(tab){
	        console.log(tab.url);
	      });
	      this.setState({openTabs: tabs})
	      // console.log("Length of tabs inside chrome tabs is "+this.state.openTabs.length);
	 	  
	 	});

	      // console.log("Length of tabs outside chrome is "+this.state.openTabs.length);
	}

	// createListOfopenTabs(){

	// 	// Create an empty array that will hold the final JSX output.
	//     let buffer = []
	//     let tabs = this.state.openTabs;
	    
	//     tabs.forEach((item)=> {
          
	//     	buffer.push(<li>{item}</li>);
 //        });

	//     // And return the buffer for display inside the render() function
	//     return (
	//         <ul>
	//             {buffer}
	//         </ul>
	//     );
	// }


} 

export default App;
