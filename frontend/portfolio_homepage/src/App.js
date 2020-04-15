 /*global chrome*/

import React, { Component } from 'react';
import './App.css';
import UserProvider from "./Authentication/UserProvider";
import Application from "./Authentication/Application";
//TODO currently clumsy way of dealing with the chrome extension connection error in the local host main page.

class App extends Component{

    constructor() {
        super();
        this.state = {
        	urlsForLaunch:[]
        };
        chrome.runtime.sendMessage({rq: "urlsForLaunch"}, this._callbackForURLResponse);
		

    }


    componentDidMount() {
        
		// this.experiment()
		//   this.setState({
		// 	urlsForLaunch: response.urlsForLaunch
			// });
		// })
		// console.log("App state is "+this.state.urlsForLaunch.toString());
    }
    
  	_callbackForURLResponse = (response) => {
			
		  console.log("Currently opened tabs in app in chrome runtime are "+response.openTabs);
		  console.log("URLs for Launch in app in chrome runtime are "+response.urlsForLaunch);

			this.setState({urlsForLaunch: response.urlsForLaunch})
			console.log("In callback App urlsForLaunch state is "+this.state.urlsForLaunch.toString());

		}

	render(){

		  return <div className="App">

					<UserProvider>
						<Application />
					</UserProvider>


		    		<h2>URLs for Launch</h2>
					<ul>
        			{ this.state.urlsForLaunch.map(title => <li>{title}</li>)}
      				</ul>
		    	</div> 

	}
}

export default App;
