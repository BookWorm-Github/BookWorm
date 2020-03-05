
import React, { Component } from 'react';



class App extends Component{
    constructor(props) {
        super(props);
        
    }

	render(){
		  return (
		    <div>

    			<button id="url-btn">URL Button</button>
		    	<h3>Currently Opened URLs:</h3>
		    	<div id = "url-list"></div>
		    </div>
		  );
	}


} 

export default App;
