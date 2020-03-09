
import React, { Component } from 'react';



class App extends Component{
    constructor(props) {
        super(props);
        
    }

	render(){
		var openTabs = this.createListOfopenTabs(this.props.urls);
		  return (
		    <div>
		    	{openTabs}
		    </div>
		  );
	}
	createListOfopenTabs(tabs){

		// Create an empty array that will hold the final JSX output.
	    let buffer = []
	    
	    tabs.forEach((item)=> {
	      
	    	buffer.push(<li>{item}</li>);
	    });

	    // And return the buffer for display inside the render() function
	    return (
	        <ul>
	            {buffer}
	        </ul>
	    );
	}


} 

export default App;
